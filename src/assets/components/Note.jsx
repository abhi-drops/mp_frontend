import React from 'react'
import useravatar from '../images/useravatar2.svg'
import { HiHeart } from 'react-icons/hi'
import { FaRegHeart } from 'react-icons/fa6'
import { FiAlertTriangle } from 'react-icons/fi'
import { IoPaperPlaneOutline } from 'react-icons/io5'
import { BiMessageSquare, BiMessageSquareAdd } from 'react-icons/bi'

function Note() {
  return (

   <>

   {/* note  */}

      <div className="w-full bg-info rounded-lg flex flex-col p-5">
        <div className="flex gap-2 items-center">
          <img src={useravatar} alt="" />
          <p className='text-sm font-semibold'>Username</p>
        </div>


          <p className='text-sm font-semibold text-secondary mt-4'>LOREM HEADER ONE LOREM HEADER ONE  LOREM HEADER ONE </p>

          <p className='text-sm  text-secondary mt-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>


          <div className="w-full flex justify-between mt-5 items-center">
            <FaRegHeart className='text-xl'/>
            <div className='flex gap-3'>

            <button className='rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center' onClick={()=>document.getElementById('reportbox').classList.toggle('hidden')}>
                <FiAlertTriangle className='text-xl' />
                  Report
            </button>

            {/* show alert as "copied to clipboard" when share button is pressed */}

            <button className='rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center'>
                  <IoPaperPlaneOutline className='text-xl'/>
                  Share
            </button>

            </div>
          </div>
        </div>


        {/* Report box  */}


          <div id='reportbox' className='hidden bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3'>
            <textarea name="" id="" className='w-full outline-none bg-transparent rounded-lg ' placeholder='write the issue in short ....'></textarea>

            <div className="flex w-full justify-end">

              <button className='h-9 rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center' >
                    <BiMessageSquareAdd className='text-xl'/>
                    Add Report
              </button>
            </div>

          </div>

        {/* comment input box  */}


          <div className='bg-info w-full rounded-lg flex flex-col gap-3 mt-5 p-3'>
            <textarea name="" id="" className='w-full outline-none bg-transparent rounded-lg ' placeholder='add comments...'></textarea>

            <div className="flex w-full justify-end">

              <button className='h-9 rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center'>
                    <BiMessageSquareAdd className='text-xl'/>
                    Send
              </button>
            </div>

          </div>


          {/* comments  */}

          <div className="w-full bg-info rounded-lg flex flex-col p-5 mt-5">
            <div className="flex gap-2 items-center">
              <img src={useravatar} alt="" />
              <p className='text-sm font-semibold'>Username</p>
            </div>




              <p className='text-sm  text-secondary mt-4'><span className='font-semibold'>@username</span> simply dummy text of the printing and typesetting industry. </p>


              <div className="w-full flex justify-between mt-5 items-center">
                <FaRegHeart className='text-xl'/>
                <div className='flex gap-3'>

                <button className='h-9 rounded-full p-2 bg-secondary text-sm font-semibold flex items-center gap-2 text-info px-3  flex justify-center items-center'>
                    <BiMessageSquareAdd className='text-xl'/>
                    Replay
              </button>

                </div>
              </div>
            </div>



   </>

  )
}

export default Note