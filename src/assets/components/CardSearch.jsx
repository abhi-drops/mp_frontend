import React from 'react'
import { FaUser } from 'react-icons/fa6'
import CircleAvatarComponent from './CircleAvatarComponent'

function CardSearch({ name, icon, userno }) {
  return (
    <>
    <div className="w-full flex items-center p-2 rounded-xl h-[10vh]  font-semibold text-secondary bg-info mt-3">

        {/* <img src={icon} alt="Circle Icon" className="h-full" /> */}
        <CircleAvatarComponent seed={icon} size={"lg"}/>{/* Add className with value */}

      <div className=" flex flex-col w-full ps-3 h-full justify-around">
        <h4>{name}</h4>
        <div className='flex gap-2 items-center justify-end pe-3'>
          <FaUser />
          <p>{userno}</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default CardSearch