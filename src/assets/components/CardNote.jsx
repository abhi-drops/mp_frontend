import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsHeartFill } from 'react-icons/bs'
import { MdFullscreen } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import CardSearch from './CardSearch'
import Note from './Note'
import { useNavigate } from 'react-router-dom'

function CardNote({ note}) {


  const navigate = useNavigate()

  function addNoteUrl(e){
    e.preventDefault()
     navigate( `/circle/${note.circleId}/${note._id}` )
  }

  function removeNoteUrl(e){
    e.preventDefault()
     navigate( `/circle/${note.circleId}` )
  }




  return (
    <div className=" bg-info h-full m-5 md:mx-0 rounded-lg flex flex-col p-5 flex-grow justify-between ">
      <div className=' md:min-w-[13vw]'>
        <p>{note.noteTitle}</p>
      </div>
      <div className="flex justify-between mt-4 items-center">

        <button className='rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center'  onClick={e=>addNoteUrl(e)} >
              <MdFullscreen className='text-xl'/>
              view post
        </button>




                    {/* modal search  */}
                    <div className="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] hidden justify-center items-center backdrop-blur-sm   flex justify-center items-center  " id="modalNote">

<button className='md:relative fixed z-20 left-80 mb-[90vh] md:mb-0 md:bottom-64 md:left-2/4 md:me-10 text-white ms-5 md:ms-0' onClick={(e)=>{removeNoteUrl(e)}}>
  <RxCross2/>
</button>

<div className="md:w-2/4 md:h-5/6 w-full h-full bg-success md:rounded-lg  px-7 overflow-y-scroll overflow-x-hidden pt-20 pb-5">

    <Note noteId={note._id} circleId={note.circleId} />

</div>

</div>



        <div className='flex gap-2 items-center text-secondary'>
          <BsHeartFill/>
          {(note.noteLikedUsers?.length) > 1000 ? `${note.noteLikedUsers?.length } k` :( note.noteLikedUsers?.length)}
        </div>
      </div>
    </div>
  )
}

export default CardNote