import React, { useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsHeartFill } from 'react-icons/bs'
import { MdFullscreen } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import CardSearch from './CardSearch'

import Note from './Note'
import EventNote from './EventNote'
import { useNavigate } from 'react-router-dom'

function CardEvents({ note, like,date,event}) {

  const navigate = useNavigate();


  useEffect(() => {

    // fetchNoteData();
  }, [event._id]);

  function addNoteUrl(e) {
    e.preventDefault();
    navigate(`/events/${event._id}`);
  }

  function removeNoteUrl(e) {
    e.preventDefault();
    navigate(`/events`);
  }


  return (
    <div className=" bg-info h-full md:m-5  mx-5 md:mx-3 rounded-lg flex flex-col p-5 flex-grow justify-between">
    <div>
      <p>{note}</p>
    </div>
    <div className='flex w-full justify-end items-center md:mt-5 font-semibold'>
      <p className='text-xs italic'>Event Date : </p>
      <p className='text-sm italic ps-2'>{date.slice(0, 10)}</p>
    </div>
    <div className="flex justify-between md:mt-4 items-center">

           <button className='rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center' onClick={addNoteUrl}>
          <MdFullscreen className='text-xl'/>
          view post
        </button>




                  {/* modal search  */}
                  <div class="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] hidden justify-center items-center backdrop-blur-sm   flex justify-center items-center  " id={`modalNote-${event._id}`}>

                  <button className='md:relative fixed z-20 left-80 mb-[90vh] md:mb-0 md:bottom-64 md:left-2/4 md:me-10 text-white ms-5 md:ms-0' onClick={() => {
    document.getElementById(`modalNote-${event._id}`)?.classList.add('hidden');
    navigate(`/events`);
  }}>
            <RxCross2 />
          </button>

<div className="md:w-2/4 md:h-5/6 w-full h-full bg-success md:rounded-lg  px-7 overflow-y-scroll overflow-x-hidden pt-20 pb-5">

  <EventNote  key={event._id} event={event} />

</div>

</div>



      <div className='flex gap-2 items-center text-secondary'>
        <BsHeartFill/>
        {like}
      </div>
    </div>
  </div>
  )
}

export default CardEvents