import React from 'react'
import { GoHomeFill } from 'react-icons/go'

function AdminHome() {
  return (
    <div className='bg-teal-50 w-[100vw] h-[100vh] flex justify-end'>

      <div className=' md:w-[91.5vw] h-[100vh] w-[100vw] flex flex-col p-5'>

        {/* header */}

        <div className='w-full md:h-16 h-16  '>

            <div className=" rounded-2xl h-full flex items-center md:px-8 bg-teal-950 px-3 justify-between">
              <h5 className='flex gap-2 items-center font-semibold md:text-base text-teal-50 text-sm ps-3 md:ps-0'>Admin Pannel /  <GoHomeFill/> Home </h5>

              <button className='rounded-full bg-teal-50 text-sm font-semibold p-2 px-4'>
                Signout
              </button>
            </div>

        </div>


        {/* mainBody */}

        <div className='bg-teal-950 w-full h-full rounded-2xl mt-5 flex flex-col justify-center items-center'>


        <div className="stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat flex flex-col items-center">
            <div className="stat-title">Total Users</div>
            <div className="stat-value">1K</div>

          </div>

          <div className="stat flex flex-col items-center">
            <div className="stat-title">Total Circles</div>
            <div className="stat-value">110</div>

          </div>

          <div className="stat flex flex-col items-center">
            <div className="stat-title">Total Cities</div>
            <div className="stat-value">76</div>

          </div>
        </div>

        <div className="stats stats-vertical lg:stats-horizontal shadow mt-5">
          <div className="stat flex flex-col items-center">
            <div className="stat-title">Total Notes</div>
            <div className="stat-value">502</div>

          </div>

          <div className="stat flex flex-col items-center">
            <div className="stat-title">Total Alerts</div>
            <div className="stat-value">108</div>

          </div>

          <div className="stat flex flex-col items-center">
            <div className="stat-title">Total Events</div>
            <div className="stat-value">53</div>

          </div>
        </div>

        </div>


      </div>


    </div>
  )
}

export default AdminHome