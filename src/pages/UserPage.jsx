import React, { useEffect, useState } from 'react'
import avatar from '../assets/images/useravatar2.svg'
import avatar2 from '../assets/images/avatarsample.jpg'


import logowhite from '../assets/images/logowhite.svg'
import logoprimary from '../assets/images/logoPrimary.svg'
import { LuPen, LuUserPlus } from 'react-icons/lu';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaFacebookMessenger, FaFacebookSquare } from 'react-icons/fa';
import { RiFacebookBoxLine, RiStickyNoteAddLine } from 'react-icons/ri';
import { CgUserList } from 'react-icons/cg';
import { IoPaperPlane, IoPaperPlaneOutline } from 'react-icons/io5';
import { FiAlertTriangle } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { Link, useLocation, useParams } from 'react-router-dom'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { addReportAPI, editCircleNoteAPI, editEventNoteAPI, editUserDataAPI, followUserAPI, getUserDataAPI } from '../services/allAPI'
import UserAvatarComponent from '../assets/components/UserAvatarComponent'
import { Flip, toast, ToastContainer } from "react-toastify";

function UserPage() {

  let { id } = useParams();

  const[userData,setUserData]=useState({})



  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  const [newUserIconSeed, setNewUserIconSeed] = useState(
    userData?.userPic
  );

  const[newBio,setNewBio]=useState("")
  const[newInst,setNewInst]=useState("")
  const[newFB,setNewFB]=useState("")

  const[lastEditNoteId,setLastEditNoteId]=useState("")
  const[lastEditEventId,setLastEditEventId]=useState("")

  const [newEvent,setNewEvent]=useState({
    "eventTitle":"" ,
    "eventDes":"",
    "eventDate":""
  })

  const [newNote,setNewNote]=useState({
    "noteTitle":"" ,
    "noteDes":"",
  })
  const location = useLocation();
  const [report,setReport]=useState("")

  async function randomizeAvatarIcon() {
    setNewUserIconSeed(Math.floor(100000 + Math.random() * 900000));
  }


  useEffect(() => {
    // Function to update the screen width when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);


    };

    // Add event listener on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // useEffect(()=>{
  //   id&&console.log("id:",id);

  //   getUserData();
  //   console.log("userData:",userData);

  // },[id])


  useEffect(() => {
    if (id) {
      console.log("id:", id); // Check if `id` is printed correctly
      getUserData(id);

      setNewUserIconSeed(userData.userPic)// Pass `id` to `getUserData`


    } else {
      console.log("No id found in URL");
    }
  }, [id]);

  const getUserData = async (userId) => {
    const reqBody = { "fetchUserId"  : userId }; // Using a plain object
    console.log("reqBody:", reqBody);  // Check the body



    const token = sessionStorage.getItem("token");
    console.log("Token:", token);

    if (token) {
      const reqHeader = {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      try {
        console.log("fetchUserId:", userId);
        const result = await getUserDataAPI({"fetchUserId"  : userId}, reqHeader);
        console.log("Get User Data Result:", result);
        if (result.status === 200) {
          setUserData(result.data);
        } else {
          console.log("Get User Data Error:", result.response.data);
        }
      } catch (err) {
        console.log("Get User Data Catch Error:", err);
      }
    }
  };

  const handleEditUser = async (e) => {
    e.preventDefault();

      const reqBody = new FormData();
      reqBody.append("userPic", newUserIconSeed);
      reqBody.append("userBio", newBio);
      reqBody.append("userInst", newInst);
      reqBody.append("userFB", newFB);

      const token = sessionStorage.getItem("token");
      console.log("Token:", token);
      if (token) {
        const reqHeader = {
          "authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        try {
          const result = await editUserDataAPI(reqBody, reqHeader);
          console.log("Edit Profile Result:", result);
          if (result.status === 200) {
            getUserData(id);
            toast.success("Profile edited Successfully");
            document.getElementById("modalEB").classList.toggle("hidden");
          } else {
            console.log("Edit Profile Error:", result.response.data);
          }
        } catch (err) {
          console.log("Edit Profile Catch Error:", err);
        }
      }

  };


  // edit btn press functions


  function pressEditNoteBtn(e,id){
    e.preventDefault();
    //
    setLastEditNoteId(id)
    document.getElementById('modalN').classList.toggle('hidden')
  }

  function pressEditEventBtn(e,id){
    e.preventDefault();
    //
    setLastEditEventId(id)
    document.getElementById('modalEN').classList.toggle('hidden')
  }


  // handle edit functions...

  const handleEditEventNote = async (e) => {

    e.preventDefault();

    const reqBody = new FormData();
        reqBody.append("eventTitle", newEvent.eventTitle);
        reqBody.append("eventDes", newEvent.eventDes);
        reqBody.append("eventDate", newEvent.eventDate);

    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      try {
        const result = await editEventNoteAPI(lastEditEventId,reqBody,reqHeader);
        if (result.status === 200) {
          getUserData(id);
          setNewEvent({
            "eventTitle":"" ,
            "eventDes":"",
            "eventDate":""
          })
          console.log("event edited successfully")
        } else {
          toast.warn(result.response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };


  const handleEditCircleNote = async (e) => {

    e.preventDefault();

    const reqBody = new FormData();
        reqBody.append("noteTitle", newNote.noteTitle);
        reqBody.append("noteDes", newNote.noteDes);


    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      try {
        const result = await editCircleNoteAPI(lastEditNoteId,reqBody,reqHeader);
        if (result.status === 200) {
          setNewNote({
            "noteTitle":"" ,
            "noteDes":"",
          })
          console.log("note edited successfully")
        } else {
          toast.warn(result.response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };



  const handlefollowUser = async (e) => {

    e.preventDefault();

    const reqBody = new FormData();
        reqBody.append("targetUserId", id);



    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      try {
        const result = await followUserAPI(reqBody,reqHeader);
        if (result.status === 200) {
          toast.success("user followed/unfollowed successfully")
          getUserData(id)
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
      reqBody.append("reportType", "user");
      reqBody.append("reportAgainstUserId", userData._id);
      reqBody.append("reportNoteId", "");
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
    const fullUrl = `${window.location.origin}/userpage/${userData._id}`;

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
    <div style={{overflowX:"hidden"}} >

      {/* logo */}

      <Link to={'./home'}>
        <div className=' fixed top-5 left-5'>
          {
            screenWidth > 768 ? (
              <button className='flex gap-2 items-center bg-white p-2 rounded-full'>
          <img src={logoprimary} className='w-4' alt="" />
          <p className='text-primary text-xs font-semibold'>Steps Away</p>
        </button>
            ):
            (<button className='flex gap-2 items-center bg-primary p-2 rounded-full'>
          <img src={logowhite} className='w-4' alt="" />
          <p className='text-white text-xs font-semibold'>Steps Away</p>
        </button>)

          }
        </div>
      </Link>





      {/* modal user circle */}


      <div class="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] hidden justify-center items-center backdrop-blur-sm   flex justify-center items-center " id="modalUC">

        <button className='md:relative fixed z-20 left-80 mb-[90vh] md:mb-0 md:bottom-64 md:left-[51%] md:me-10 text-white ms-5 md:ms-0' onClick={()=>document.getElementById('modalUC').classList.toggle('hidden')} >
              <RxCross2/>
        </button>

            <div className="md:w-2/4 md:h-5/6 w-full h-full bg-success md:rounded-lg flex flex-col items-center p-5 md:me-14">



            <div role="tablist" className="tabs tabs-lifted w-full mt-10">
              <input type="radio" name="my_tabs_2" role="tab" className="tab font-semibold text-info [--tab-bg:#13413B] [--tab-border-color:#13413B]" aria-label="Followers" />
              <div role="tabpanel" className="tab-content bg-secondary border-secondary rounded-box p-6 h-[65vh]">
                <div className=" overflow-y-scroll h-full">

                {userData?.userFollowers?.map((user)=>{
                  return(
                    <Link key={user?._id} to={`/userpage/${user?._id}`}>
                    <div  className="bg-info w-full rounded-lg flex p-4 items-center gap-3 mb-3">
                    {/* <img src={avatar} alt="" /> */}
                    <UserAvatarComponent seed={user?.userPic}/>
                    <p className=' font-semibold text-secondary'>{user?.userName}</p>
                  </div>
                  </Link>
                  )
                })}

                </div>
              </div>

              <input
                type="radio"
                name="my_tabs_2"
                role="tab"
                className="tab font-semibold text-info [--tab-bg:#13413B] [--tab-border-color:#13413B]"
                aria-label="Folowing"
                defaultChecked />

              <div role="tabpanel" className="tab-content bg-secondary border-secondary rounded-box p-6 h-[65vh]">
                <div className=" overflow-y-scroll h-full">

                {userData?.userFollowing?.map((user)=>{
                  return(
                  <Link key={user?._id} to={`/userpage/${user?._id}`}>
                    <div  className="bg-info w-full rounded-lg flex p-4 items-center gap-3 mb-3">
                    {/* <img src={avatar} alt="" /> */}
                    <UserAvatarComponent seed={user?.userPic}/>
                    <p className=' font-semibold text-secondary'>{user?.userName}</p>
                  </div>
                  </Link>
                  )
                })}


                </div>
              </div>


            </div>


            </div>

        </div>

      {/* modal user Report */}


      <div class="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] hidden justify-center items-center backdrop-blur-sm   flex justify-center items-center " id="modalreport">

        <button className='md:relative fixed z-20 left-80 mb-[90vh] md:mb-0 md:bottom-64 md:left-[51%] md:me-10 text-white ms-5 md:ms-0' onClick={()=>document.getElementById('modalreport').classList.toggle('hidden')} >
              <RxCross2/>
        </button>

            <div className="md:w-2/4 md:h-5/6 w-full h-full bg-success md:rounded-lg flex flex-col items-center p-10  md:me-14 ">


              {/* Report box  */}


                <div id='reportbox' className=' bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3 h-full'>
                  <textarea value={report} onChange={(e)=>setReport(e.target.value)} name="" id="" className='w-full outline-none bg-transparent rounded-lg h-full' placeholder='write the issue in short ....'></textarea>

                  <div className="flex w-full justify-end">

                    <button className='h-9 rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center' onClick={(e)=>handleAddReport(e)} >
                          <BiMessageSquareAdd className='text-xl'/>
                          Add Report
                    </button>
                  </div>

                </div>


            </div>

        </div>

      {/* modal Edit Bio */}


      <div class="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] hidden justify-center items-center backdrop-blur-sm   flex justify-center items-center " id="modalEB">

        <button className='md:relative fixed z-20 left-80 mb-[90vh] md:mb-0 md:bottom-64 md:left-[51%] md:me-10 text-white ms-5 md:ms-0' onClick={()=>document.getElementById('modalEB').classList.toggle('hidden')} >
              <RxCross2/>
        </button>

            <div className="md:w-2/4 md:h-5/6 w-full h-full bg-success md:rounded-lg flex flex-col  p-5 md:me-14">
                <p className='text-2xl text-info font-semibold'>Edit Profile </p>

                <div className='w-100 flex md:flex-row flex-col-reverse gap-5 items-center justify-center md:pe-10 pt-10 md:pt-10'>

                      <div className='w-[100%] '>

                        {/* link */}
                        <div className='bg-info w-full rounded-lg flex flex-col gap-3  p-3'>
                        <input value={newFB} onChange={e=>setNewFB(e.target.value)} name="" id="" className='w-full outline-none bg-transparent rounded-lg ' placeholder='FaceBook Link'/>
                        </div>

                        {/* link */}
                        <div className='bg-info w-full rounded-lg flex flex-col gap-3 mt-3 p-3'>
                        <input value={newInst} onChange={e=>setNewInst(e.target.value)} name="" id="" className='w-full outline-none bg-transparent rounded-lg ' placeholder='Instagram Link'/>
                        </div>

                      </div>

                      <label htmlFor="pp" className='flex flex-col justify-center items-center gap-5' >

                        <UserAvatarComponent size={"md"} seed={newUserIconSeed}/>

                        <button className='rounded-full p-2 bg-info text-sm font-semibold flex items-center gap-2 text-secondary px-3  flex justify-center items-center h-10 w-28' onClick={()=>randomizeAvatarIcon()} >
                         <p className='text-xs'>Randomize Avatar</p>
                      </button>

                      </label>



                </div>

                {/* add Bio */}
                <div className='bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3'>
                  <textarea value={newBio} onChange={e=>setNewBio(e.target.value)} name="" id="" className='w-full outline-none bg-transparent rounded-lg h-52 ' placeholder='add Bio...'></textarea>

                  <div className="flex w-full justify-end">

                    <button onClick={e=>handleEditUser(e)} className='h-9 rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center'>
                    <RiStickyNoteAddLine className='text-xl'/>
                          Save
                    </button>
                  </div>

                </div>

            </div>

        </div>




      {/* modal Edit Alert Note */}

      <div class="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] hidden justify-center items-center backdrop-blur-sm   flex justify-center items-center " id="modalAN">

        <button className='md:relative fixed z-20 left-80 mb-[90vh] md:mb-0 md:bottom-64 md:left-[51%] md:me-10 text-white ms-5 md:ms-0' onClick={()=>document.getElementById('modalAN').classList.toggle('hidden')} >
              <RxCross2/>
        </button>

            <div className="md:w-2/4 md:h-5/6 w-full h-full bg-success md:rounded-lg flex flex-col  p-5 md:me-14">
                        {/* heading */}
                  <p className='text-2xl text-info font-semibold mt-10'>Edit Alert Note </p>

                  <div className='bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3'>
                    <input type='text' name="" id="" className='w-full outline-none bg-transparent rounded-lg ' placeholder='add Heading...'/>
                  </div>

                  {/* add content */}
                  <div className='bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3'>
                    <textarea name="" id="" className='w-full outline-none bg-transparent rounded-lg h-80 ' placeholder='add Details...'></textarea>

                    <div className="flex w-full justify-end">

                      <button className='h-9 rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center'>
                      <RiStickyNoteAddLine className='text-xl'/>
                            save
                      </button>
                    </div>

                  </div>

            </div>

        </div>


      {/* modal Edit Event Note */}

      <div class="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] hidden justify-center items-center backdrop-blur-sm   flex justify-center items-center " id="modalEN">

        <button className='md:relative fixed z-20 left-80 mb-[90vh] md:mb-0 md:bottom-64 md:left-[51%] md:me-10 text-white ms-5 md:ms-0' onClick={()=>document.getElementById('modalEN').classList.toggle('hidden')} >
              <RxCross2/>
        </button>

            <div className="md:w-2/4 md:h-5/6 w-full h-full bg-success md:rounded-lg flex flex-col  p-5 md:me-14">

                {/* heading */}

                <p className='text-2xl text-info font-semibold mt-10'>Edit Event Note </p>

                <div className='bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3'>
                  <input type='text' name="" id="" value={newEvent.eventTitle} onChange={e=>setNewEvent({...newEvent, eventTitle: e.target.value})} className='w-full outline-none bg-transparent rounded-lg ' placeholder='add Heading...'/>
                </div>

                <div className='bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3 ' >
                <p className='text-xl text-success font-semibold'>Event Date </p>
                  <input type='date' value={newEvent.eventDate} onChange={e=>setNewEvent({...newEvent, eventDate: e.target.value})} name="" id="" className='w-full outline-none bg-transparent rounded-lg ' placeholder='add Heading...'/>
                </div>


                {/* add content */}
                <div className='bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3'>
                  <textarea name="" id="" value={newEvent.eventDes} onChange={e=>setNewEvent({...newEvent, eventDes: e.target.value})} className='w-full outline-none bg-transparent rounded-lg h-52 ' placeholder='add Details...'></textarea>

                  <div className="flex w-full justify-end">

                    <button className='h-9 rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center' onClick={(e)=>handleEditEventNote(e)}>
                    <RiStickyNoteAddLine className='text-xl'/>
                          save
                    </button>
                  </div>

                </div>



            </div>

        </div>


      {/* modal Edit circle  Note */}

      <div class="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] hidden justify-center items-center backdrop-blur-sm   flex justify-center items-center " id="modalN">

        <button className='md:relative fixed z-20 left-80 mb-[90vh] md:mb-0 md:bottom-64 md:left-[51%] md:me-10 text-white ms-5 md:ms-0' onClick={()=>document.getElementById('modalN').classList.toggle('hidden')} >
              <RxCross2/>
        </button>

            <div className="md:w-2/4 md:h-5/6 w-full h-full bg-success md:rounded-lg flex flex-col  p-5 md:me-14">
              <p className='text-2xl text-info font-semibold mt-10'>Edit Post </p>

              {/* heading */}
              <div className='bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3'>
                <input name="" value={newNote.noteTitle} onChange={e=>setNewNote({...newNote,noteTitle:e.target.value})}  id="" className='w-full outline-none bg-transparent rounded-lg ' placeholder='add Heading...'/>
              </div>

              {/* add content */}
              <div className='bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3'>
                <textarea name="" id=""  value={newNote.noteDes} onChange={e=>setNewNote({...newNote,noteDes:e.target.value})} className='w-full outline-none bg-transparent rounded-lg h-80 ' placeholder='add Details...'></textarea>

                <div className="flex w-full justify-end">

                  <button className='h-9 rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center' onClick={(e)=>handleEditCircleNote(e)}>
                  <RiStickyNoteAddLine className='text-xl'/>
                        save
                  </button>
                </div>

              </div>
            </div>

        </div>


        {/* page */}
      <div className="bg-primary w-[100vw]  flex flex-col items-center pb-32" >

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />

        {/* user name and image */}

        <div className="md:w-1/2 bg-info  rounded-es-[150px] md:rounded-ee-[150px] w-full flex flex-col items-center">

        {/* image */}

        <div className="flex justify-center items-center bg-primary rounded-full p-3 mt-16">
          {/* <img src={avatar} alt="" className='w-36' /> */}
          <UserAvatarComponent seed={userData.userPic} size={"md"}/>
        </div>

        <div className="flex flex-col md:items-center mt-5 w-full items-end p-5 ">
          <h1 className='text-xl font-semibold text-secondary '>{userData?.userName}</h1>
          <h1 className=' font-semibold text-sm text-secondary opacity-75'>{userData?.userCities?.map(city=>` ~ ${city.cityName}`)}</h1>
        </div>

        </div>

        {/* button */}

        <div className="flex md:flex-row flex-col justify-center items-center w-full mt-3 gap-3">

        <div className="md:grid flex md;grid-rows-2 md:grid-cols-2 items-center justify-center p-4  bg-info md:w-[20vw] md:h-[18vw] md:rounded-lg w-full gap-2 overflow-x-scroll ps-36 md:ps-0 ">


          <div className='w-full justify-center items-center h-full flex'>
            <button disabled={id && id === "1"}  className='rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center h-10 w-28 disabled:opacity-30' onClick={(e)=>handlefollowUser(e)}  >
              <LuUserPlus className='text-base'/> <p className='text-xs'>{userData?.userFollowers?.some(
  (following) => following.userName === sessionStorage.getItem("username"))?"unfollow":"follow"
}</p>
            </button>
          </div>

          <div className='w-full justify-center items-center h-full flex'>
            <button className='rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center h-10 w-32' onClick={()=>document.getElementById('modalUC').classList.toggle('hidden')} >
              <CgUserList className='text-base'/> <p className='text-xs'>User Circle</p>
            </button>
          </div>



          <div className='w-full justify-center items-center h-full flex'>
            <button className='rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center h-10 w-28'  onClick={handleCopyUrl}  >
              <IoPaperPlaneOutline className='text-base'/> <p className='text-xs'>Share</p>
            </button>
          </div>

          <div className='w-full justify-center items-center h-full flex'>
            <button disabled={id && id === "1"} className='rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center h-10 w-32 disabled:opacity-30' onClick={()=>document.getElementById('modalreport').classList.toggle('hidden')}  >
              <FiAlertTriangle className='text-base'/> <p className='text-xs'>Report</p>
            </button>
          </div>
        </div>


        {/* info */}

        <div className='w-full h-full md:w-auto md:h-auto flex gap-3'>

        <div className='md:w-[30vw] md:h-[18vw] w-[80vw] h-[70vw] bg-info rounded-lg md:p-10 p-5 justify-between flex flex-col'>

            <p className=' text-secondary'>{userData.userBio}</p>

            <div className='flex w-full justify-between items-center'>
                <div className="flex flex-col justify-center items-center">
                  <p className='text-xl font-semibold text-secondary'>follow me on</p>
                  <div className="flex gap-3 items-center w-full justify-start">
                    <a href={userData?.userInst}>
                    <BsInstagram className='text-xl'/>
                    </a>

                    <a href={userData?.userFB}>
                    < RiFacebookBoxLine className='text-2xl'/>
                    </a>

                  </div>
                </div>


                <div className=''>
              {id && id == "1" && (<button className='rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center h-10 w-28'  onClick={()=>document.getElementById('modalEB').classList.toggle('hidden')} >
                <LuPen className='text-base'/> <p className='text-xs'>Edit</p>
              </button>)}
            </div>

            </div>

            </div>



            {/* extra div for mob view */}

            <div className="h-[70vw] w-[20vw] bg-info rounded-s-lg md:hidden"></div>


            {/*user alert notes */}



        </div>


        </div>


       {id && id == "1" &&
        (<div className="flex md:flex-row flex-col justify-center items-start w-full   mt-3 gap-3 ">

          <div className='md:w-[25vw] md:min-h-[20vw]
          overflow-y-scroll
           w-full  bg-info md:rounded-lg md:p-10 p-5 justify-between flex flex-col h-full '>

            <p className='text-xl font-semibold text-secondary mb-5'>Circle Notes</p>


            <div className='w-full flex flex-col gap-3'>

                { userData?.userNotes?.map((note)=>{return(
                  <div key={note._id} className="bg-secondary w-full  rounded-lg flex flex-col p-4">
                  <p className='text-sm text-info mb-3 font-semibold'>{note.noteTitle}</p>
                  <div className='w-full flex justify-end'>
                    <button className='rounded-full p-2 bg-info text-sm font-semibold flex items-center gap-2 text-secondary px-3  flex justify-center items-center h-10 w-28' onClick={(e)=>pressEditNoteBtn(e,note._id)} >
                      <LuPen className='text-base'/> <p className='text-xs'>Edit</p>
                    </button>
                  </div>
              </div>
                )})}


            </div>

          </div>


          <div className='md:w-[25vw]  w-full  bg-info md:rounded-lg md:p-10 p-5 justify-between flex flex-col md:min-h-[20vw]
          overflow-y-scroll '>

            <p className='text-xl font-semibold text-secondary mb-5'>Event Notes</p>


            <div className='w-full flex flex-col gap-3'>



               { userData?.userEvents?.map((event)=> {return(

<div key={event._id}  className="bg-secondary w-full rounded-lg flex flex-col p-4">
<p className='text-sm text-info mb-3 font-semibold'>{event.eventTitle}</p>
<div className='w-full flex justify-end'>
  <button className='rounded-full p-2 bg-info text-sm font-semibold flex items-center gap-2 text-secondary px-3  flex justify-center items-center h-10 w-28' onClick={(e)=>pressEditEventBtn(e,event._id)} >
    <LuPen className='text-base'/> <p className='text-xs'>Edit</p>
  </button>
</div>
</div>

               )})}



            </div>

          </div>

        </div>)
}





      </div>
    </div>
  )
}

export default UserPage