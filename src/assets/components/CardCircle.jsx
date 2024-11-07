import React from 'react'
import { FaUser } from 'react-icons/fa6'
import CircleAvatarComponent from './CircleAvatarComponent'

function CardCircle({ name, circlePic , userno }) {
  return (
    <>
      <div className="md:w-80 w-full flex items-center p-5 rounded-xl md:h-[17vh] h-[10vh]  font-semibold text-info bg-secondary ">

          <CircleAvatarComponent key={name} seed={circlePic} size="lg" /> {/* Add className with value */}

        <div className=" flex flex-col w-full ps-5 h-full justify-center">
          <h4>{name}</h4>
          <p className='text-sm text-info opacity-70 flex items-center gap-2'>{userno} users</p>
        </div>
      </div>
    </>
  )
}

export default CardCircle
