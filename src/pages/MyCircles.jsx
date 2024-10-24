import React from 'react'
import SearchIcon from '../assets/images/BiSearch.svg'
import CardCircle from '../assets/components/CardCircle'
import circleicon from '../assets/images/circleicon.svg'
import { BiSearch } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import CardSearch from '../assets/components/CardSearch'
function MyCircles() {
  return (
    <>
      <div className='w-[100vw] md:h-[85vh] h-[82vh] md:px-40 px-3'>
        <div className="w-full h-full bg-primary rounded-t-xl md:px-10 px-5 ">

        <div className="w-full flex justify-between pt-10 items-center ">
          <div className="md:text-3xl text-xl font-semibold text-info">
            <h2>My Circles</h2>
          </div>
          <div className="flex gap-3 justify-center items-center">
          <button className='outline outline-info rounded-full p-1 text-info text-xl hover:scale-105 w-8 h-8 flex justify-center items-center'
            onClick={()=>document.getElementById('modalAdd').classList.toggle('hidden')} >
            +
            </button>

            {/* modal */}

            <div class="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] hidden justify-center items-center backdrop-blur-sm   flex justify-center items-center  " id="modalAdd">

              <button className='md:relative fixed z-20 left-80 mb-[90vh] md:mb-0 md:bottom-20 md:left-2/4 md:me-10 text-white ms-5 md:ms-0' onClick={()=>document.getElementById('modalAdd').classList.toggle('hidden')} >
                <RxCross2/>
              </button>
              <div className="md:w-2/4 md:h-2/6 w-full h-full bg-success md:rounded-lg flex flex-col justify-center items-center">
              <div className="flex">

                  <input type="text" className='rounded-s-full py-3 outline-none ps-3 md:w-[40vw] w-[80vw] text-sm' placeholder='Cycle Club , Developers , cricket ...' />
                  <button className='bg-secondary p-2 rounded-e-full px-4 text-info'>
                   + Add
                  </button>
              </div>

              </div>

              </div>






          <button className='rounded-full p-2 bg-info text-sm font-semibold flex items-center gap-2 text-secondary px-2  flex justify-center items-center' onClick={()=>document.getElementById('modalSearch').classList.toggle('hidden')} >
            <img src={SearchIcon} alt="" />
            Search
            </button>


            {/* modal search  */}
            <div class="fixed z-10 top-0 left-0 w-[100vw] h-[100vh] hidden justify-center items-center backdrop-blur-sm   flex justify-center items-center " id="modalSearch">

              <button className='md:relative fixed z-20 left-80 mb-[90vh] md:mb-0 md:bottom-64 md:left-[51%] md:me-10 text-white ms-5 md:ms-0' onClick={()=>document.getElementById('modalSearch').classList.toggle('hidden')} >
                <RxCross2/>
              </button>
              <div className="md:w-2/4 md:h-5/6 w-full h-full bg-success md:rounded-lg flex flex-col justify-center items-center p-5">
              <div className="flex">

                  <input type="text" className='rounded-s-full py-3 outline-none ps-3 md:w-[40vw] w-[80vw] text-sm' placeholder='Cycle Club , Developers , cricket ...' />
                  <button className='bg-secondary p-2 rounded-e-full px-4'>
                    <BiSearch className='text-white'/>
                  </button>
              </div>

              <div className=' md:w-[43vw] w-[85vw] mt-5 overflow-y-scroll'>
                <CardSearch name={"Circle Name 1"} icon={circleicon} userno={65} />
                <CardSearch name={"Circle Name 1"} icon={circleicon} userno={65} />
                <CardSearch name={"Circle Name 1"} icon={circleicon} userno={65} />
                <CardSearch name={"Circle Name 1"} icon={circleicon} userno={65} />
                <CardSearch name={"Circle Name 1"} icon={circleicon} userno={65} />
                <CardSearch name={"Circle Name 1"} icon={circleicon} userno={65} />
                <CardSearch name={"Circle Name 1"} icon={circleicon} userno={65} />
                <CardSearch name={"Circle Name 1"} icon={circleicon} userno={65} />
                <CardSearch name={"Circle Name 1"} icon={circleicon} userno={65} />
                <CardSearch name={"Circle Name 1"} icon={circleicon} userno={65} />
                <CardSearch name={"Circle Name 1"} icon={circleicon} userno={65} />
              </div>
              </div>

              </div>


          </div>
        </div>

        <div className=" bg-gradient-to-b from-primary to-transparent w-full h-5 relative top-6 "></div>

        {/* cards group*/}
        <div className="w-[100%] h-[82%]  mt-2 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 grid gap-3 overflow-y-scroll pt-5  ">

          <CardCircle className=""  name={"Circle Name 1"} icon={circleicon} userno={65} />
          <CardCircle name={"Circle Name 1"} icon={circleicon} userno={65} />
          <CardCircle name={"Circle Name 1"} icon={circleicon} userno={65} />
          <CardCircle name={"Circle Name 1"} icon={circleicon} userno={65} />
          <CardCircle name={"Circle Name 1"} icon={circleicon} userno={65} />
          <CardCircle name={"Circle Name 1"} icon={circleicon} userno={65} />
          <CardCircle name={"Circle Name 1"} icon={circleicon} userno={65} />
          <CardCircle name={"Circle Name 1"} icon={circleicon} userno={65} />
          <CardCircle name={"Circle Name 1"} icon={circleicon} userno={65} />
          <CardCircle name={"Circle Name 1"} icon={circleicon} userno={65} />
          <CardCircle name={"Circle Name 1"} icon={circleicon} userno={65} />

        </div>

        </div>
      </div>
    </>
  )
}

export default MyCircles