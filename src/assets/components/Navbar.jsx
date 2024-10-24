import React, { useEffect, useState } from 'react'

import userAvatar from '../images/userAvatar.svg'
import Navlogo from './navbarCom/Navlogo'
import NavMenu from './navbarCom/NavMenu'
import NavLocation from './navbarCom/NavLocation'
import { Link } from 'react-router-dom'
function Navbar() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);


  useEffect(() => {
    // Function to update the screen width when the window is resized
    const handleResize = () => {
      setScreenWidth(window.innerWidth);


    };

    // Add event listener on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (

    <>
      {screenWidth > 768 ?
      // desktop view
        <div className='w-[100vw] md:h-[15vh]  flex justify-center items-center transition-all'>
        <div className="flex gap-3 ">
          <Navlogo />
          <NavMenu />
          <NavLocation/>

          <div className="dropdown dropdown-hover ">

            <div tabIndex={0} role="button">
              <img src={userAvatar} alt="" className='h-11' />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-secondary rounded-box z-[1] w-52 p-2 shadow text-info font-semibold">
              <li> <Link to="/userpage/123">Profile</Link> </li>
              <li><a>SignOut</a></li>
            </ul>
          </div>
        </div>
      </div>

      :
        // mobile view

      <div className='w-[100vw] h-[18vh] flex flex-col gap-4 justify-center items-center transition-all'>

        <div className="flex gap-4 w-full justify-end px-3 items-center">
        <Navlogo />
        <div className="dropdown dropdown-end ">

            <div tabIndex={0} role="button">
              <img src={userAvatar} alt="" className='h-11' />
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-secondary rounded-box z-[1] w-52 p-2 shadow text-info font-semibold">
              <li> <Link to="/userpage/123">Profile</Link> </li>
              <li><a>SignOut</a></li>
            </ul>
          </div>
        </div>

        <div className="flex  gap-4 w-full px-3">
        <NavMenu />
        <NavLocation/>
        </div>

      </div>

    }
    </>

  )
}

export default Navbar