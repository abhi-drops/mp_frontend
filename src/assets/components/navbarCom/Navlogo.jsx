import React from 'react'
import logo from '../../images/logowhite.svg'
function Navlogo() {
  return (
    <div className='flex items-center md:gap-1 gap-3 rounded-full bg-primary md:p-1 p-3 px-4 w-full md:w-auto md:px-5'>
          <img src={logo} alt="" className='md:w-4 w-8' />
          <p className=" md:text-sm text-xl font-medium text-white">Steps Away</p>
    </div>
  )
}

export default Navlogo