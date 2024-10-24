import React from 'react'
import { FaTools } from 'react-icons/fa'
import { GoHomeFill } from 'react-icons/go'
import { MdReportProblem } from 'react-icons/md'
import { TbMessageReportFilled } from 'react-icons/tb'
import { Link } from 'react-router-dom'

function AdminNavBar() {
  return (
    <div className='fixed md:w-[9.5vw] w-[100vw]  md:h-[100vh]  px-10 flex justify-center md:items-center bottom-10'>

<ul className="menu menu-horizontal bg-teal-950 text-teal-50 rounded-box border
 border-teal-50 border-2">
  <li>
    <Link to={'./adminhome'}>
    <a className="tooltip tooltip-right" data-tip="Home">
      <GoHomeFill className='text-xl '/>
    </a>
    </Link>
  </li>

  <li>
  <Link to={'./adminreport'}>
    <a className="tooltip tooltip-right" data-tip="Reports">
      <TbMessageReportFilled className='text-xl'/>
    </a>
  </Link>
  </li>


  <li>
    <Link to={'./admintools'}>
    <a className="tooltip tooltip-right" data-tip="Tools">
      <FaTools className='text-xl'/>
    </a>
    </Link>
  </li>
</ul>

    </div>
  )
}

export default AdminNavBar