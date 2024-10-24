import React from 'react'
import { FaUser } from 'react-icons/fa6'

function CardCircle({ name, icon, userno }) {
  return (
    <>
      <div className="md:w-80 w-full flex items-center p-5 rounded-xl md:h-[17vh] h-[10vh]  font-semibold text-info bg-secondary ">

          <img src={icon} alt="Circle Icon" className="h-full" /> {/* Add className with value */}

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

export default CardCircle
