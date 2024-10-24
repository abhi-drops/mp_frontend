import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { MdLocationOn, MdOutlineEventNote } from 'react-icons/md'
import { RiStickyNoteAddLine } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'

function NavLocation() {
  return (
    <>

    {/* modal Add */}
        <div class="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] hidden justify-center items-center backdrop-blur-sm   flex justify-center items-center " id="modal">

      <button className='md:relative fixed z-20 left-80 mb-[90vh] md:mb-0 md:bottom-64 md:left-2/4 md:me-10 text-white ms-5 md:ms-0' onClick={()=>document.getElementById('modal').classList.toggle('hidden')} >
        <RxCross2/>
      </button>
      <div className="md:w-2/4 md:h-5/6 w-full h-full bg-success md:rounded-lg pt-20 p-5 md:me-28 flex flex-col items-center ">

      <div className="flex w-full justify-center">

      <input type="text" className='rounded-s-full py-3 outline-none ps-3 md:w-[40vw] w-[80vw] text-sm' placeholder='kochi , mumbai , delhi ....' />
      <button className='bg-secondary p-2 rounded-e-full px-4'>
        <BiSearch className='text-white'/>
      </button>
      </div>

      <div className=' mt-5 overflow-y-scroll w-[80%] flex flex-col items-center gap-3 px-5 transition-all '>

          <div className='w-full py-3 px-3 flex justify-center items-center rounded-lg bg-info cursor-pointer hover:py-5 transition-all '>
            <p className='text-secondary font-semibold'>Add New City</p>
          </div>

          <div className='w-full py-3 px-3 flex justify-center items-center rounded-lg bg-info cursor-pointer hover:py-5 transition-all '>
            <p className='text-secondary font-semibold'>Kochi</p>
          </div>

          <div className='w-full py-3 px-3 flex justify-center items-center rounded-lg bg-info cursor-pointer hover:py-5 transition-all '>
            <p className='text-secondary font-semibold'>Kochi</p>
          </div>

          <div className='w-full py-3 px-3 flex justify-center items-center rounded-lg bg-info cursor-pointer hover:py-5 transition-all '>
            <p className='text-secondary font-semibold'>Kochi</p>
          </div>

          <div className='w-full py-3 px-3 flex justify-center items-center rounded-lg bg-info cursor-pointer hover:py-5 transition-all '>
            <p className='text-secondary font-semibold'>Kochi</p>
          </div>

          <div className='w-full py-3 px-3 flex justify-center items-center rounded-lg bg-info cursor-pointer hover:py-5 transition-all '>
            <p className='text-secondary font-semibold'>Kochi</p>
          </div>

          <div className='w-full py-3 px-3 flex justify-center items-center rounded-lg bg-info cursor-pointer hover:py-5 transition-all '>
            <p className='text-secondary font-semibold'>Kochi</p>
          </div>

          <div className='w-full py-3 px-3 flex justify-center items-center rounded-lg bg-info cursor-pointer hover:py-5 transition-all '>
            <p className='text-secondary font-semibold'>Kochi</p>
          </div>

          <div className='w-full py-3 px-3 flex justify-center items-center rounded-lg bg-info cursor-pointer hover:py-5 transition-all '>
            <p className='text-secondary font-semibold'>Kochi</p>
          </div>

          <div className='w-full py-3 px-3 flex justify-center items-center rounded-lg bg-info cursor-pointer hover:py-5 transition-all '>
            <p className='text-secondary font-semibold'>Kochi</p>
          </div>

      </div>

      </div>

      </div>



    <div className='flex items-center gap-2 rounded-full bg-primary p-1 px-2 w-full md:w-auto '>
        <button className=' rounded-full p-2  text-xl flex md:flex-row justify-end items-center gap-2 text-white px-2 w-full 'onClick={()=>document.getElementById('modal').classList.toggle('hidden')} > <span className='text-xs font-semibold ' >Kochi</span>   <MdLocationOn/> </button>
    </div>

    </>
  )
}

export default NavLocation