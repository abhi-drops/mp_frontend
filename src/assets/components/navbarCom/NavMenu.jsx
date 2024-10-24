import React, { useEffect, useState } from 'react'
import { MdLocationOn, MdOutlineEventNote } from 'react-icons/md'
import { FiUser } from 'react-icons/fi'
import { AiOutlineAlert } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
function NavMenu() {

  const [activeKey,setActiveKey]=useState("")
  const navigate = useNavigate()


  const location = useLocation()


  useEffect(()=>{
    // current url
    setActiveKey(location.pathname.split('/')[1])

  },[location])


  function eventBtn() {
    navigate('/events')
  }

  function circleBtn() {
    navigate('/home')
  }

  function AlertBtn() {
    navigate('/emergencies')
  }



  return (

       <div className='flex items-center gap-2 rounded-full bg-primary p-1 px-3 transition-all'>
          <button className={` ${activeKey === 'events' ? 'rounded-full p-2 bg-white text-base flex items-center gap-2 text-secondary px-2' : 'outline outline-white rounded-full p-1 text-white text-base hover:scale-105'} transition-all `}
          onClick={()=>eventBtn()} >
            <MdOutlineEventNote/>{activeKey === 'events' && <span className='text-xs font-semibold' >Events </span>}
            </button>

          <button className={` ${activeKey === 'home' || activeKey === 'circle' ? 'rounded-full p-2 bg-white text-base flex items-center gap-2 text-secondary px-2' : 'outline outline-white rounded-full p-1 text-white text-base hover:scale-105'} transition-all`}
          onClick={()=>circleBtn()} >
            <FiUser/>{activeKey === 'home'|| activeKey === 'circle' ? <span className='text-xs font-semibold'>Circles </span> : ""}
            </button>

          <button  className={` ${activeKey === 'emergencies' ? 'rounded-full p-2 bg-white text-base flex items-center gap-2 text-secondary px-2' : 'outline outline-white rounded-full p-1 text-white text-base hover:scale-105'}  transition-all`}
          onClick={()=>AlertBtn()}>
            <AiOutlineAlert/>{activeKey === 'emergencies' && <span className='text-xs font-semibold'>Alerts </span>}
            </button>
        </div>

  )
}

export default NavMenu