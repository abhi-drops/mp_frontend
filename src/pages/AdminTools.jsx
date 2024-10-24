import React from 'react'
import { FaTools } from 'react-icons/fa'

function AdminTools() {
  return (
    <div className='bg-teal-50 w-[100vw] h-[100vh] flex justify-end'>

      <div className=' md:w-[91.5vw] h-[100vh] w-[100vw] flex flex-col p-5'>

        {/* header */}

        <div className='w-full md:h-16 h-16  '>

            <div className=" rounded-2xl h-full flex items-center md:px-8 bg-teal-950 px-3 justify-between">
              <h5 className='flex gap-2 items-center font-semibold md:text-base text-teal-50 text-sm ps-3 md:ps-0'>Admin Pannel / <FaTools/> Tools </h5>

              <button className='rounded-full bg-teal-50 text-sm font-semibold p-2 px-4'>
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
            <input className="input input-bordered " placeholder="Note ID" />
            <input className="input input-bordered " placeholder="City ID" />
            <button className="btn  rounded-lg w-full">Remove</button>
            </div>
          </div>
          </div>

          {/* Remove Post */}

          <div className="md:w-[50%] h-[75vh] bg-teal-900 rounded-2xl flex flex-col">
            <p className='text-teal-50 text-2xl font-semibold px-10 pt-10'>BAN user</p>
          <div className=" w-full h-full flex flex-col gap-5 justify-center items-center">
            <div className='flex flex-col gap-5'>
            <input className="input input-bordered " placeholder="User ID" />
            <button className="btn  rounded-lg w-full">Ban</button>
            </div>
          </div>
          </div>



          </div>

          <div className="w-full h-full flex gap-5 mt-8 md:flex-row flex-col">
            {/* Remove Post */}

          <div className="md:w-[50%] h-[75vh] bg-teal-900 rounded-2xl flex flex-col">
            <p className='text-teal-50 text-2xl font-semibold px-10 pt-10'>Remove Alert</p>
            <div className=" w-full h-full flex flex-col gap-5 justify-center items-center">
            <div className='flex flex-col gap-5'>
            <input className="input input-bordered " placeholder="Alert ID" />
            <input className="input input-bordered " placeholder="City ID" />
            <button className="btn  rounded-lg w-full">Remove</button>
            </div>
          </div>
          </div>

          {/* Remove Post */}

          <div className="md:w-[50%] h-[75vh] bg-teal-900 rounded-2xl flex flex-col ">
            <p className='text-teal-50 text-2xl font-semibold px-10 pt-10'>Remove Event</p>
            <div className=" w-full h-full flex flex-col gap-5 justify-center items-center">
            <div className='flex flex-col gap-5'>
            <input className="input input-bordered " placeholder="Event ID" />
            <input className="input input-bordered " placeholder="City ID" />
            <button className="btn  rounded-lg w-full">Remove</button>
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