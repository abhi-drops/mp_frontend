import React, { useEffect, useState } from 'react'
import { TbMessageReport, TbMessageReportFilled } from 'react-icons/tb'
import { banUserAPI, deleteEventAPI, getReportAPI, removeCircleNoteAPI, resolveReportAPI } from '../services/allAPI';
import { Flip, toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function AdminReport() {

  const [reportData,setReportData]=useState({})

  const navigate = useNavigate()

  const getReportData = async () => {

    try {
      const result = await getReportAPI();
      console.log("Get Report Data Result:", result.data);
      if (result.status === 200) {
        setReportData(result.data)
      } else {
        console.log("Get Report Data Error:", result.response.data);
      }
    } catch (err) {
      console.log("Get Report Data Catch Error:", err);
    }

};

useEffect(()=>{
  getReportData()
},[])

const handleRemoveCircleNote = async (e,id) => {

  e.preventDefault();


  const token = sessionStorage.getItem("token");
  if (token) {
    const reqHeader = {
      "authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      const result = await removeCircleNoteAPI(id,reqHeader);
      if (result.status === 200) {
        toast.success("event removed successfully")
      } else {
        toast.error(result.response.data);
      }
    } catch (err) {
      toast.error(err);
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
        toast.success("circle removed successfully")
      } else {
        toast.error(result.response.data);
      }
    } catch (err) {
      toast.error(err);
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

          toast.success("banned user successfully")
        }else{
          toast.success("unbanned user successfully")
        }
      } else {
        toast.error(result.response.data);
      }
    } catch (err) {
      toast.error(err);
    }
  }
};
const handleResolveReport = async (e, id) => {
  e.preventDefault();
  try {
    const result = await resolveReportAPI(id);
    if (result.status === 200) {
      toast.success("Report resolved successfully:", result.data);
      getReportData()
    } else {
      toast.error("Failed to resolve report:", result.response?.data || result);
    }
  } catch (err) {
    toast.error("Error resolving report:", err.response?.data || err);
  }
};

function SignOut() {
  sessionStorage.clear()
  navigate(0);
}

  return (
    <div className='bg-teal-50 w-[100vw] h-[100vh] flex justify-end overflow-x-hidden'>
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

      <div className=' md:w-[91.5vw] h-[100vh] w-[100vw] flex flex-col p-5'>

        {/* header */}

        <div className='w-full md:h-16 h-16  '>

            <div className=" rounded-2xl h-full flex items-center md:px-8 bg-teal-950 px-3 justify-between">
              <h5 className='flex gap-2 items-center font-semibold md:text-base text-teal-50 text-sm ps-3 md:ps-0'>Admin Pannel / <TbMessageReportFilled/> Reports </h5>

              <button onClick={SignOut} className='rounded-full bg-teal-50 text-sm font-semibold p-2 px-4'>
                Signout
              </button>
            </div>

        </div>


        {/* mainBody */}

        <div className='bg-teal-950 w-full h-[85vh] rounded-2xl mt-5 md:flex md:flex-row  justify-center items-center py-5 overflow-y-scroll'>


          {/*USER report */}

          <div className='md:w-[30%] md:h-full h-fit md:h-full md:mt-0 mt-5 overflow-y-scroll md:border md:border-y-0 md:border-s-0 md:border-e-2 border-teal-50 px-5'>
            <h2 className='text-xl font-semibold text-teal-50 mb-5'>User Reports</h2>

            {reportData?.userReports?.map((rep) => (
                <div key={rep._id} className="bg-teal-50 w-full rounded-2xl p-5 mt-5">
                    <p className="font-semibold text-teal-950 mb-2">Username: {rep.reportedUserName}</p>
                    {rep.reportCompliance.map((compliance) => (
                        <p key={compliance._id} className="text-teal-950">
                            <span className="font-semibold pe-2">@{compliance.userName}</span>
                            {compliance.details}
                        </p>
                    ))}
                    {/* <button onClick={()=>navigate(`/userpage/${rep.reportAgainstUserId}`)} className="p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold">VISIT USER</button> */}
                    <button onClick={(e)=>handleBanUser(e,rep.reportAgainstUserId,true)} className="p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold">BAN USER</button>
                    <button onClick={e=>handleResolveReport(e,rep._id)} className="p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold">CANCEL</button>
                </div>
            ))}


          </div>

          {/*NOTE report */}

          <div className='md:w-[30%] h-fit md:h-full md:mt-0 mt-5 overflow-y-scroll md:border md:border-y-0 md:border-s-0 md:border-e-2 border-teal-50 px-5'>
            <h2 className='text-xl font-semibold text-teal-50 mb-5'>Note Reports</h2>

            {reportData?.noteReports?.map((rep) => (
                <div key={rep._id} className="bg-teal-50 w-full rounded-2xl p-5 mt-5">
                    <p className="font-semibold text-teal-950 mb-2">Note Title: {rep.noteTitle}</p>
                    {rep.reportCompliance.map((compliance) => (
                        <p key={compliance._id} className="text-teal-950">
                            <span className="font-semibold pe-2">@{compliance.userName}</span>
                            {compliance.details}
                        </p>
                    ))}
                    {/* <button  className="p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold">VISIT NOTE</button> */}
                    <button onClick={e=>handleRemoveCircleNote(e,rep.reportNoteId)} className="p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold">DELETE NOTE</button>
                    <button onClick={e=>handleResolveReport(e,rep._id)} className="p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold">CANCEL</button>
                </div>
            ))}


          </div>


          {/*EVENT report */}

          <div className='md:w-[30%] h-fit md:h-full md:mt-0 mt-5 overflow-y-scroll px-5'>
            <h2 className='text-xl font-semibold text-teal-50 mb-5'>Event Reports</h2>

            {reportData?.eventReports?.map((rep) => (
                <div key={rep._id} className="bg-teal-50 w-full rounded-2xl p-5 mt-5">
                    <p className="font-semibold text-teal-950 mb-2">Event Title: {rep.eventTitle}</p>
                    {rep.reportCompliance.map((compliance) => (
                        <p key={compliance._id} className="text-teal-950">
                            <span className="font-semibold pe-2">@{compliance.userName}</span>
                            {compliance.details}
                        </p>
                    ))}
                    {/* <button onClick={()=>navigate(`/events/${rep.reportEventId}`)} className="p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold">VISIT EVENT</button> */}
                    <button onClick={e=>handleDeleteEvent(e,rep.reportEventId)} className="p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold">DELETE EVENT</button>
                    <button onClick={e=>handleResolveReport(e,rep._id)} className="p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold">CANCEL</button>
                </div>
            ))}

          </div>


        </div>


      </div>


    </div>
  )
}

export default AdminReport