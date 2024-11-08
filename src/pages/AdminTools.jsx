import React, { useRef, useState } from 'react'
import { FaTools } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { banUserAPI, deleteEventAPI, removeCircleNoteAPI, resolveReportAPI } from '../services/allAPI';

function AdminTools() {

  const navigate = useNavigate()

  const [noteId , setNoteId] = useState("")

  const [userId,setUserId]=useState("")

  const [eventId ,setEventId]=useState("")

  function SignOut() {
    sessionStorage.clear()
    navigate(0);
  }

  const handleRemoveCircleNote = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      try {
        const result = await removeCircleNoteAPI(noteId,reqHeader);
        if (result.status === 200) {
          console.log("event removed successfully")
        } else {
          console.log(result.response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };


  const handleBanUser = async (e,id,status) => {

    e.preventDefault();

    const reqBody = new FormData();
        reqBody.append("targetUserId",id);
        reqBody.append("banStatus", status);


    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      try {
        const result = await banUserAPI(reqBody,reqHeader);
        if (result.status === 200) {
          if (status) {

            console.log("banned user successfully")
          }else{
            console.log("unbanned user successfully")
          }
        } else {
          console.log(result.response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleDeleteEvent = async (e,id) => {

    e.preventDefault();


    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      try {
        const result = await deleteEventAPI(id,reqHeader);
        if (result.status === 200) {
          console.log("event removed successfully")
        } else {
          console.log(result.response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };




  return (
    <div className='bg-teal-50 w-[100vw] h-[100vh] flex justify-end'>

      <div className=' md:w-[91.5vw] h-[100vh] w-[100vw] flex flex-col p-5'>

        {/* header */}

        <div className='w-full md:h-16 h-16  '>

            <div className=" rounded-2xl h-full flex items-center md:px-8 bg-teal-950 px-3 justify-between">
              <h5 className='flex gap-2 items-center font-semibold md:text-base text-teal-50 text-sm ps-3 md:ps-0'>Admin Pannel / <FaTools/> Tools </h5>

              <button onClick={SignOut} className='rounded-full bg-teal-50 text-sm font-semibold p-2 px-4'>
                Signout
              </button>
            </div>

        </div>


        {/* mainBody */}

        <div className='bg-teal-950 w-full h-full rounded-2xl mt-5 overflow-y-scroll p-10'>

          <div className="w-full h-full flex gap-5 md:flex-row flex-col">
            {/* Remove Post */}

          <div className="md:w-[50%] h-[75vh] bg-teal-900 rounded-2xl flex flex-col">
            <p className='text-teal-50 text-2xl font-semibold px-10 pt-10'>Remove Note</p>
          <div className=" w-full h-full flex flex-col gap-5 justify-center items-center">
            <div className='flex flex-col gap-5'>
            <input value={noteId} onChange={e=>setNoteId(e.target.value)} className="input input-bordered " placeholder="Note ID" />
            <button onClick={(e)=>handleRemoveCircleNote(e)} className="btn  rounded-lg w-full">Remove</button>
            </div>
          </div>
          </div>

          {/*BAN AND UNBAN USER */}

          <div className="md:w-[50%] h-[75vh] bg-teal-900 rounded-2xl flex flex-col">
            <p className='text-teal-50 text-2xl font-semibold px-10 pt-10'>BAN user</p>
          <div className=" w-full h-full flex flex-col gap-5 justify-center items-center">
            <div className='flex flex-col gap-5'>
            <input value={userId} onChange={e=>setUserId(e.target.value)} className="input input-bordered " placeholder="User ID" />
            <button className="btn  rounded-lg w-full" onClick={(e)=>handleBanUser(e,userId,true)}>Ban</button>
            <button className="btn  rounded-lg w-full"onClick={(e)=>handleBanUser(e,userId,false)} >UnBan</button>
            </div>
          </div>
          </div>
          </div>

          <div className="w-full md:h-full h-[50%] flex gap-5 mt-8 md:flex-row flex-col">


          {/* Remove event */}

          <div className="md:w-[50%] h-[75vh] bg-teal-900 rounded-2xl flex flex-col ">
            <p className='text-teal-50 text-2xl font-semibold px-10 pt-10'>Remove Event</p>
            <div className=" w-full h-full flex flex-col gap-5 justify-center items-center">
            <div className='flex flex-col gap-5'>
            <input value={eventId} onChange={e=>setEventId(e.target.value)} className="input input-bordered " placeholder="Event ID" />
            <button onClick={e=>handleDeleteEvent(e,eventId)} className="btn  rounded-lg w-full">Remove</button>
            </div>
          </div>
          </div>
          </div>

        </div>


      </div>


    </div>
  )
}

export default AdminTools