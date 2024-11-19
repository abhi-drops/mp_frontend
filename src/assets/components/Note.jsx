import React, { useContext, useEffect, useState } from 'react'
import useravatar from '../images/useravatar2.svg'
import { HiHeart } from 'react-icons/hi'
import { FaRegHeart } from 'react-icons/fa6'
import { FiAlertTriangle } from 'react-icons/fi'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { BiMessageSquare, BiMessageSquareAdd } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
import { addNoteCommentAPI, addNoteLikeAPI, addReportAPI, getNoteDataAPI } from '../../services/allAPI'
import UserContext from '../ContextAPI/UserContext'
import { toast } from 'react-toastify'
import { BsHeartFill } from 'react-icons/bs'
import UserAvatarComponent from './UserAvatarComponent'

function Note({noteId,circleId}) {

  const [userResponse, setuserResponse] = useContext(UserContext);



  let { noteid } = useParams();
  const navigate=useNavigate()

  const [newComment,setNewComment]=useState("")

  const [noteData,setNoteData]=useState({})

  const [like,setLike]=useState(false)

  const [report,setReport]=useState("")


  useEffect(() => {


    if (noteid && noteid === noteId) {
      document.getElementById(`modalNote-${noteId}`)?.classList.remove('hidden');
      getNoteData();
    }
  }, [noteid, noteId]);

 // Include both dependencies to trigger re-render if either changes


 useEffect(()=>{

  userResponse?._id ? setLike(noteData.noteLikedUsers?.includes(userResponse?._id)):""
  console.log("like:",like);

 },[noteData,userResponse])


  const getNoteData = async () => {

    try {
      const result = await getNoteDataAPI(noteid);
      console.log("Get Note Data Result:", result.data);
      if (result.status === 200) {
        setNoteData(result.data)



      } else {
        console.log("Get Note Data Error:", result.response.data);
      }
    } catch (err) {
      console.log("Get Note Data Catch Error:", err);
    }

};

//   const addNoteLike = async () => {

//     try {
//       const result = await getNoteDataAPI(noteid);
//       console.log("Get Note Data Result:", result.data);
//       if (result.status === 200) {
//         setNoteData(result.data)



//       } else {
//         console.log("Get Note Data Error:", result.response.data);
//       }
//     } catch (err) {
//       console.log("Get Note Data Catch Error:", err);
//     }

// };



const replay = (username) =>{
  setNewComment(`@${username} `)
}



const handleAddComment = async (e) => {

  e.preventDefault();

  console.log(userResponse);


  if (!newComment) {
    toast.info("Please fill in the missing fields");
    return;
  }

  const reqBody = new FormData();
  reqBody.append("commentedUserName", userResponse.userName);
  reqBody.append("commentedUserPic", userResponse.userPic);
  reqBody.append("commentedText", newComment);


  const token = sessionStorage.getItem("token");
  if (token) {
    const reqHeader = {
      "authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      const result = await addNoteCommentAPI(noteid, reqBody, reqHeader);
      if (result.status === 200) {
        setNewComment("")
        getNoteData()
        toast.success("comment added successfully")

      } else {
        toast.warn(result.response.data);
      }
    } catch (err) {
      console.log(err);
    }
  }
};

const handleLikeNote = async (e) => {

  e.preventDefault();


  const token = sessionStorage.getItem("token");
  if (token) {
    const reqHeader = {
      "authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      const result = await addNoteLikeAPI(noteid,reqHeader);
      if (result.status === 200) {
        setLike(!like)
        console.log("Liked/unliked successfully")


      } else {
        toast.warn(result.response.data);
      }
    } catch (err) {
      console.log(err);
    }
  }
};


const handleAddReport = async (e) => {
  e.preventDefault();

  if ( report == "" ) {
    toast.info("Please fill the missing field");
  } else {
    const reqBody = new FormData();
    reqBody.append("reportType", "note");
    reqBody.append("reportAgainstUserId", "");
    reqBody.append("reportNoteId", noteData?._id);
    reqBody.append("reportEventId", "");
    reqBody.append("reportDetails", report);
    const token = sessionStorage.getItem("token");
    console.log("Token:", token);
    if (token) {
      const reqHeader = {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      try {
        const result = await addReportAPI(reqBody, reqHeader);
        console.log("Add report Result:", result);
        if (result.status === 200) {
          toast.success("Report Added Successfully");
          document.getElementById("modalAdd").classList.toggle("hidden");
          setReport("");

        } else {
          console.log("Add Report Error:", result.response.data);
        }
      } catch (err) {
        console.log("Add Report Catch Error:", err);
      }
    }
  }
};


const handleCopyUrl = () => {
  // Create the full URL
  const fullUrl = `${window.location}`;

  // Copy to clipboard
  navigator.clipboard.writeText(fullUrl)
    .then(() => {
      toast.success("URL copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy URL: ", err);
    });
};




  return (

   <>

   {/* note  */}

      <div className="w-full bg-info rounded-lg flex flex-col p-5 ">
        <div className="flex gap-2 items-center">
          {/* <img src={useravatar} alt="" /> */}
          <UserAvatarComponent seed={noteData?.noteCreatorId?.userPic}/>
          <p className='text-sm font-semibold'>{noteData?noteData.noteCreatorId?.userName : getNoteData()}</p>
        </div>


          <p className='text-sm font-semibold text-secondary mt-4'>{noteData?.noteTitle} </p>

          <p className='text-sm  text-secondary mt-4'>{noteData?.noteDes} </p>


          <div className="w-full flex justify-between mt-5 items-center">

             <div onClick={e=>handleLikeNote(e)}>
               {like?<BsHeartFill className='text-xl text-red-500 hover:scale-110 transition-all' />
               :<FaRegHeart className='text-xl'/>}
             </div>

            <div className='flex gap-3'>

            <button className='rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center' onClick={() => {

              document.getElementById('reportbox').classList.toggle('hidden');
  }}>
                <FiAlertTriangle className='text-xl' />
                  Report
            </button>

            {/* show alert as "copied to clipboard" when share button is pressed */}

            <button className='rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center' onClick={handleCopyUrl}>
                  <IoPaperPlaneOutline className='text-xl'/>
                  Share
            </button>

            </div>
          </div>
        </div>


        {/* Report box  */}


          <div id='reportbox' className='hidden bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3'>
            <textarea value={report} onChange={(e)=>setReport(e.target.value)}  name="" id="" className='w-full outline-none bg-transparent rounded-lg ' placeholder='write the issue in short ....'></textarea>

            <div className="flex w-full justify-end">

              <button className='h-9 rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center' onClick={(e)=>handleAddReport(e)} >
                    <BiMessageSquareAdd className='text-xl'/>
                    Add Report
              </button>
            </div>

          </div>

        {/* comment input box  */}


          <div className='bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3'>
            <textarea name="" value={newComment} onChange={e=>setNewComment(e.target.value)} id="" className='w-full outline-none bg-transparent rounded-lg ' placeholder='add comments...'></textarea>

            <div className="flex w-full justify-end">

              <button className='h-9 rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center' onClick={(e)=>handleAddComment(e)} >
                    <BiMessageSquareAdd className='text-xl'/>
                    Send
              </button>
            </div>

          </div>



          {/* comments  */}
            { noteData.noteComments?.map(((comment,index)=>{
              return(
          <div key={index} className="w-full bg-info rounded-lg flex flex-col p-5 mt-5">

                <div  className="flex gap-2 items-center">
              {/* <img src={useravatar} alt="" /> */}
              <UserAvatarComponent seed={comment.commentedUserPic}/>
              <p className='text-sm font-semibold'>{comment.commentedUserName}</p>
            </div>





              <p className='text-sm  text-secondary mt-4'><span className='font-semibold'></span> {comment.commentedText} </p>


              <div className="w-full flex justify-between mt-5 items-center">
                <p> </p>
                <div className='flex gap-3'>

                <button className='h-9 rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center' onClick={()=>replay(comment.commentedUserName)}>
                    <BiMessageSquareAdd className='text-xl'/>
                    Replay
              </button>

                </div>
              </div>
            </div>
              )
            }))
          }



   </>

  )
}

export default Note