import React from 'react'
import { TbMessageReport, TbMessageReportFilled } from 'react-icons/tb'

function AdminReport() {
  return (
    <div className='bg-teal-50 w-[100vw] h-[100vh] flex justify-end overflow-x-hidden'>

      <div className=' md:w-[91.5vw] h-[100vh] w-[100vw] flex flex-col p-5'>

        {/* header */}

        <div className='w-full md:h-16 h-16  '>

            <div className=" rounded-2xl h-full flex items-center md:px-8 bg-teal-950 px-3 justify-between">
              <h5 className='flex gap-2 items-center font-semibold md:text-base text-teal-50 text-sm ps-3 md:ps-0'>Admin Pannel / <TbMessageReportFilled/> Reports </h5>

              <button className='rounded-full bg-teal-50 text-sm font-semibold p-2 px-4'>
                Signout
              </button>
            </div>

        </div>


        {/* mainBody */}

        <div className='bg-teal-950 w-full h-[85vh] rounded-2xl mt-5 md:flex md:flex-row  justify-center items-center py-5 overflow-y-scroll'>


          {/*USER report */}

          <div className='md:w-[25%] md:h-full h-fit md:h-full md:mt-0 mt-5 overflow-y-scroll md:border md:border-y-0 md:border-s-0 md:border-e-2 border-teal-50 px-5'>
            <h2 className='text-xl font-semibold text-teal-50 mb-5'>User Reports</h2>

            <div className='bg-teal-50 w-full  rounded-2xl p-5 mt-5'>
                <p className='font-semibold text-teal-950 mb-2'>Username</p>
                <p className=' text-teal-950'><span className='font-semibold pe-2'>@complaintuser1</span>Lorem info how he violated the policy </p>
                <p className=' text-teal-950'><span className='font-semibold pe-2'>@complaintuser2</span>Lorem info how he violated the policy </p>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>VISIT USER</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>BAN USER</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>CANCEL</button>
            </div>
            <div className='bg-teal-50 w-full  rounded-2xl p-5 mt-5'>
                <p className='font-semibold text-teal-950 mb-2'>Username</p>
                <p className=' text-teal-950'><span className='font-semibold pe-2'>@complaintuser1</span>Lorem info how he violated the policy </p>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>VISIT USER</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>BAN USER</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>CANCEL</button>
            </div>
            <div className='bg-teal-50 w-full  rounded-2xl p-5 mt-5'>
                <p className='font-semibold text-teal-950 mb-2'>Username</p>
                <p className=' text-teal-950'><span className='font-semibold pe-2'>@complaintuser1</span>Lorem info how he violated the policy </p>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>VISIT USER</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>BAN USER</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>CANCEL</button>
            </div>
            <div className='bg-teal-50 w-full  rounded-2xl p-5 mt-5'>
                <p className='font-semibold text-teal-950 mb-2'>Username</p>
                <p className=' text-teal-950'><span className='font-semibold pe-2'>@complaintuser1</span>Lorem info how he violated the policy </p>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>VISIT USER</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>BAN USER</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>CANCEL</button>
            </div>
          </div>

          {/*NOTE report */}

          <div className='md:w-[25%] h-fit md:h-full md:mt-0 mt-5 overflow-y-scroll md:border md:border-y-0 md:border-s-0 md:border-e-2 border-teal-50 px-5'>
            <h2 className='text-xl font-semibold text-teal-50 mb-5'>Note Reports</h2>

            <div className='bg-teal-50 w-full  rounded-2xl p-5 mt-5'>
                <p className='font-semibold text-teal-950 mb-2'>Username</p>
                <p className=' text-teal-950 mb-3'> <span className='font-semibold pe-2'>@complaintuser1</span> Lorem info how he violated the policy </p>
                <p className=' text-teal-950 mb-3'> <span className='font-semibold pe-2'>@complaintuser2</span> Lorem info how he violated the policy </p>
                <p className=' text-teal-950 mb-0'> <span className='font-semibold pe-2'>@complaintuser3</span> Lorem info how he violated the policy </p>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>VISIT NOTE</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>REMOVE NOTE</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>CANCEL</button>
            </div>
            <div className='bg-teal-50 w-full  rounded-2xl p-5 mt-5'>
                <p className='font-semibold text-teal-950 mb-2'>Username</p>
                <p className=' text-teal-950'><span className='font-semibold pe-2'>@complaintuser1</span> Lorem info how he violated the policy </p>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>VISIT NOTE</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>REMOVE NOTE</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>CANCEL</button>
            </div>
            <div className='bg-teal-50 w-full  rounded-2xl p-5 mt-5'>
                <p className='font-semibold text-teal-950 mb-2'>Username</p>
                <p className=' text-teal-950'><span className='font-semibold pe-2'>@complaintuser1</span> Lorem info how he violated the policy </p>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>VISIT NOTE</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>REMOVE NOTE</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>CANCEL</button>
            </div>
            <div className='bg-teal-50 w-full  rounded-2xl p-5 mt-5'>
                <p className='font-semibold text-teal-950 mb-2'>Username</p>
                <p className=' text-teal-950'><span className='font-semibold pe-2'>@complaintuser1</span> Lorem info how he violated the policy </p>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>VISIT NOTE</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>REMOVE NOTE</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>CANCEL</button>
            </div>
          </div>

          {/*ALERT report */}

          <div className='md:w-[25%] h-fit md:h-full md:mt-0 mt-5 overflow-y-scroll md:border md:border-y-0 md:border-s-0 md:border-e-2 border-teal-50 px-5'>
            <h2 className='text-xl font-semibold text-teal-50 mb-5'>Alert Reports</h2>

            <div className='bg-teal-50 w-full  rounded-2xl p-5 mt-5'>
                <p className='font-semibold text-teal-950 mb-2'>Username</p>
                <p className=' text-teal-950 mb-3'> <span className='font-semibold pe-2'>@complaintuser1</span> Lorem info how he violated the policy </p>
                <p className=' text-teal-950 mb-3'> <span className='font-semibold pe-2'>@complaintuser2</span> Lorem info how he violated the policy </p>
                <p className=' text-teal-950 mb-0'> <span className='font-semibold pe-2'>@complaintuser3</span> Lorem info how he violated the policy </p>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>VISIT ALERT</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>REMOVE ALERT</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>CANCEL</button>
            </div>
            <div className='bg-teal-50 w-full  rounded-2xl p-5 mt-5'>
                <p className='font-semibold text-teal-950 mb-2'>Username</p>
                <p className=' text-teal-950'><span className='font-semibold pe-2'>@complaintuser1</span> Lorem info how he violated the policy </p>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>VISIT ALERT</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>REMOVE ALERT</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>CANCEL</button>
            </div>
            <div className='bg-teal-50 w-full  rounded-2xl p-5 mt-5'>
                <p className='font-semibold text-teal-950 mb-2'>Username</p>
                <p className=' text-teal-950'><span className='font-semibold pe-2'>@complaintuser1</span> Lorem info how he violated the policy </p>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>VISIT ALERT</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>REMOVE ALERT</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>CANCEL</button>
            </div>
            <div className='bg-teal-50 w-full  rounded-2xl p-5 mt-5'>
                <p className='font-semibold text-teal-950 mb-2'>Username</p>
                <p className=' text-teal-950'><span className='font-semibold pe-2'>@complaintuser1</span> Lorem info how he violated the policy </p>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>VISIT ALERT</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>REMOVE ALERT</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>CANCEL</button>
            </div>
          </div>

          {/*EVENT report */}

          <div className='md:w-[25%] h-fit md:h-full md:mt-0 mt-5 overflow-y-scroll px-5'>
            <h2 className='text-xl font-semibold text-teal-50 mb-5'>Event Reports</h2>

            <div className='bg-teal-50 w-full  rounded-2xl p-5 mt-5'>
                <p className='font-semibold text-teal-950 mb-2'>Username</p>
                <p className=' text-teal-950 mb-3'> <span className='font-semibold pe-2'>@complaintuser1</span> Lorem info how he violated the policy </p>
                <p className=' text-teal-950 mb-3'> <span className='font-semibold pe-2'>@complaintuser2</span> Lorem info how he violated the policy </p>
                <p className=' text-teal-950 mb-0'> <span className='font-semibold pe-2'>@complaintuser3</span> Lorem info how he violated the policy </p>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>VISIT EVENT</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>REMOVE EVENT</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>CANCEL</button>
            </div>
            <div className='bg-teal-50 w-full  rounded-2xl p-5 mt-5'>
                <p className='font-semibold text-teal-950 mb-2'>Username</p>
                <p className=' text-teal-950'><span className='font-semibold pe-2'>@complaintuser1</span> Lorem info how he violated the policy </p>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>VISIT EVENT</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>REMOVE EVENT</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>CANCEL</button>
            </div>
            <div className='bg-teal-50 w-full  rounded-2xl p-5 mt-5'>
                <p className='font-semibold text-teal-950 mb-2'>Username</p>
                <p className=' text-teal-950'><span className='font-semibold pe-2'>@complaintuser1</span> Lorem info how he violated the policy </p>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>VISIT EVENT</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>REMOVE EVENT</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>CANCEL</button>
            </div>
            <div className='bg-teal-50 w-full  rounded-2xl p-5 mt-5'>
                <p className='font-semibold text-teal-950 mb-2'>Username</p>
                <p className=' text-teal-950'><span className='font-semibold pe-2'>@complaintuser1</span> Lorem info how he violated the policy </p>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>VISIT EVENT</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>REMOVE EVENT</button>
                <button className='p-3 w-full rounded-full text-teal-50 bg-teal-950 mt-5 font-semibold'>CANCEL</button>
            </div>
          </div>






        </div>


      </div>


    </div>
  )
}

export default AdminReport