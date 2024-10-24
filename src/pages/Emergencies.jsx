import React from 'react'

import SearchIcon from '../assets/images/BiSearch.svg'
import CardCircle from '../assets/components/CardCircle'
import circleicon from '../assets/images/circleicon.svg'
import { BiMessageSquareAdd, BiSearch } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import CardSearch from '../assets/components/CardSearch'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import CardNote from '../assets/components/CardNote'
import { RiStickyNoteAddLine } from 'react-icons/ri'
import CardEvents from '../assets/components/CardEvents'
import CardAlerts from '../assets/components/CardAlerts'

function Emergencies() {
  return (
    <>
    <div className='w-[100vw] md:h-[85vh] h-[82vh] md:px-40 px-3 overflow-x-hidden'>
       <div className="w-full h-full bg-primary rounded-t-xl ">

       <div className="w-full flex justify-between pt-10 items-center ">
         <div className="md:text-3xl text-xl font-semibold text-info flex items-center gap-5 ps-10 pb-7 md:pb-0">

           <h2>City Alerts </h2>
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
             <p className='text-2xl text-info font-semibold'>Create New Alert Note </p>

             <div className='bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3'>
               <input type='text' name="" id="" className='w-full outline-none bg-transparent rounded-lg ' placeholder='add Heading...'/>
             </div>

             {/* add content */}
             <div className='bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3'>
               <textarea name="" id="" className='w-full outline-none bg-transparent rounded-lg h-80 ' placeholder='add Details...'></textarea>

               <div className="flex w-full justify-end">

                 <button className='h-9 rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center'>
                 <RiStickyNoteAddLine className='text-xl'/>
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


       <h2 className='text-2xl font-semibold text-info ms-5 py-5'>Today's Alerts </h2>


         <div className=' w-full md:flex grid gap-3 pb-3 md:pb-0 md:gap-0  '>
         <CardAlerts className=" h-[100%]" note="Anyone up for coffee this Saturday? New to the city and looking to meet some people " like="75" />
         <CardAlerts className=" h-[100%]" note="Looking for a part-time web developer. DM me for details!" like="5" />
         </div>

         <div className=' w-full md:flex grid gap-3 pb-3 md:pb-0 md:gap-0 '>

         <CardAlerts className=" h-[100%]" note="Free furniture! Moving out and need to get rid of some stuff." like="15" />
         <CardAlerts className=" h-[100%] " note="Any cool hidden gems around the city I should check out?" like="10" />
         </div>

         <div className=' w-full md:flex grid gap-3 pb-3 md:pb-0 md:gap-0 '>

         <CardAlerts className=" h-[100%]" note="Urgent: Blood drive today at the downtown hospital. Come donate!" like="15" />
         <CardAlerts className=" h-[100%]" note="Any cool hidden gems around the city I should check out?" like="10" />
         </div>

         <h2 className='text-2xl font-semibold text-info ms-5 py-5'>Yesterday's Alerts </h2>

         <div className=' w-full md:flex grid gap-3 pb-3 md:pb-0 md:gap-0 '>
         <CardAlerts className=" h-[100%]" note="Anyone up for coffee this Saturday? New to the city and looking to meet some people " like="75" />
         <CardAlerts className=" h-[100%] " note="Looking for a part-time web developer. DM me for details!" like="5" />
         </div>

         <div className=' w-full md:flex grid gap-3 pb-3 md:pb-0 md:gap-0 '>
         <CardAlerts className=" h-[100%] " note="Looking for a part-time web developer. DM me for details!" like="5" />
         </div>

       </div>

       </div>
     </div>
   </>
  )
}

export default Emergencies