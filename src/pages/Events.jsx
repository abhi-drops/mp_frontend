import React, { useContext, useEffect, useState } from 'react'


import { RxCross2 } from 'react-icons/rx'
import { RiStickyNoteAddLine } from 'react-icons/ri'
import CardEvents from '../assets/components/CardEvents'
import { Flip, toast, ToastContainer } from 'react-toastify'
import { addNewEventAPI, editEventNoteAPI, getEventsDataAPI, getUserDataAPI } from '../services/allAPI'
import EventGrid from '../assets/components/EventGrid'
import UserContext from '../assets/ContextAPI/UserContext'


function Events() {

  const [eventsData,setEventsData] = useState({})
  const [userResponse, setuserResponse] = useContext(UserContext);

  const [newEvent,setNewEvent]=useState({
    "eventTitle":"" ,
    "eventDes":"",
    "eventDate":""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleAddNewEvent = async (e) => {
    e.preventDefault();

    const {eventTitle,eventDes,eventDate}=newEvent;

    if (eventTitle == "" || eventDes == "" || eventDate == ""  ) {
      toast.info("Please fill the missing field");
    } else {
      const reqBody = new FormData();
      reqBody.append("cityId", sessionStorage.getItem("selectedCityId"));
      reqBody.append("eventTitle", eventTitle);
      reqBody.append("eventDes", eventDes);
      reqBody.append("eventDate", eventDate);
      const token = sessionStorage.getItem("token");
      console.log("Token:", token);
      if (token) {
        const reqHeader = {
          "authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        try {
          const result = await addNewEventAPI(reqBody, reqHeader);
          console.log("Add Event Result:", result);
          if (result.status === 200) {
            getEventsData()
            toast.success("Event Added Successfully");
            document.getElementById("modalAdd").classList.toggle("hidden");
            setNewEvent({
              "eventTitle":"" ,
              "eventDes":"",
              "eventDate":""
            });


          } else {
            console.log("Add Event Error:", result.response.data);
          }
        } catch (err) {
          console.log("Add Event Catch Error:", err);
        }
      }
    }
  };

  const getEventsData = async () => {

    const cityId = sessionStorage.getItem("selectedCityId")

    try {
      const result = await getEventsDataAPI(cityId);
      console.log("Get Events Data Result:", result);
      if (result.status === 200) {
        setEventsData(result.data)

      } else {
        console.log("Get Events Data Error:", result.response.data);
      }
    } catch (err) {
      console.log("Get Events Data Catch Error:", err);
    }

};

const getUserData = async () => {
  const reqBody = new FormData();
  const token = sessionStorage.getItem("token");
  console.log("Token:", token);
  if (token) {
    const reqHeader = {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    try {
      const result = await getUserDataAPI(reqBody, reqHeader);
      console.log("Get User Data Result:", result);
      if (result.status === 200) {
        setuserResponse(result.data);
      } else {
        console.log("Get User Data Error:", result.response.data);
      }
    } catch (err) {
      console.log("Get User Data Catch Error:", err);
    }
  }
};



useEffect(()=>{
  getUserData()
  getEventsData()
},[])







  return (
    <>
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
    <div className='w-[100vw] md:h-[85vh] h-[82vh] md:px-40 px-3 overflow-x-hidden'>
       <div className="w-full h-full bg-primary rounded-t-xl ">

       <div className="w-full flex justify-between pt-10 items-center ">
         <div className="md:text-3xl text-xl font-semibold text-info flex items-center gap-5 ps-10 pb-7 md:pb-0">

           <h2>Event Lineup </h2>
         </div>

       </div>

       <div className="flex gap-3 justify-end items-center px-5 relative bottom-3">



           <button className='rounded-full p-2 bg-info text-sm font-semibold flex items-center gap-2 text-secondary px-3  flex justify-center items-center' onClick={()=>document.getElementById('modalAdd').classList.toggle('hidden')} >
           <RiStickyNoteAddLine className='text-xl'/>
           Add
           </button>


           {/* modal Add */}
           <div class="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] hidden justify-center items-center backdrop-blur-sm   flex justify-center items-center  " id="modalAdd">

             <button className='md:relative fixed z-20 left-80 mb-[90vh] md:mb-0 md:bottom-64 md:left-2/4 md:me-10 text-white ms-5 md:ms-0' onClick={()=>document.getElementById('modalAdd').classList.toggle('hidden')} >
               <RxCross2/>
             </button>
             <div className="md:w-2/4 md:h-5/6 w-full h-full bg-success md:rounded-lg pt-20 p-5">

             {/* heading */}
             <p className='text-2xl text-info font-semibold'>Create New Event Note </p>

             <div className='bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3'>
               <input value={newEvent.eventTitle}  onChange={handleInputChange} type='text' name="eventTitle" id="" className='w-full outline-none bg-transparent rounded-lg ' placeholder='add Heading...'/>
             </div>

             <div className='bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3 ' >
             <p className='text-xl text-success font-semibold'>Event Date </p>
               <input value={newEvent.eventDate}  onChange={handleInputChange} type='date' name="eventDate" id="" className='w-full outline-none bg-transparent rounded-lg ' placeholder='add Heading...'/>
             </div>


             {/* add content */}
             <div className='bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3'>
               <textarea value={newEvent.eventDes}  onChange={handleInputChange} name="eventDes" id="" className='w-full outline-none bg-transparent rounded-lg h-52 ' placeholder='add Details...'></textarea>

               <div className="flex w-full justify-end">

                 <button className='h-9 rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center' onClick={e=>handleAddNewEvent(e)}>
                 <RiStickyNoteAddLine className='text-xl' />
                       Add Post
                 </button>
               </div>

             </div>

             </div>

             </div>




         </div>

       {/* <div className=" bg-gradient-to-b from-primary to-transparent w-full h-5 relative top-6 "></div> */}

       {/* cards group*/}
       <div className="w-[100%] h-[78%] md:h-[80.8%] mt-2  overflow-y-scroll pt-5 bg-secondary md:px-5">


       <h2 className='text-2xl font-semibold text-info ms-5 py-5'>Today's Lineup </h2>


         <div className=' w-full md:flex grid gap-3 pb-3 md:pb-0 md:gap-0  '>


         <EventGrid today={true} eventNotes={eventsData.cityEventsId || []} />

         </div>



         <h2 className='text-2xl font-semibold text-info ms-5 py-5'>Upcoming's Lineup </h2>

         <div className=' w-full md:flex grid gap-3 pb-3 md:pb-0 md:gap-0 '>

         <EventGrid today={false} eventNotes={eventsData.cityEventsId || []} />
         </div>


       </div>

       </div>
     </div>
   </>
  )
}

export default Events