import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logoblack.svg'
function Auth({register}) {

  const isRegisterForm=register?true:false;
  const navigate = useNavigate()

  function signin(){
    console.log("signin");

    if (isRegisterForm) {
      navigate(`/login`)
    }else{
      // logincode
    }


  }

  function signup() {
    console.log("signup");
    if (isRegisterForm) {
      // register code
    }else{
      navigate(`/register`)
    }
  }

  return (
    <>
    <div className='flex fixed items-center gap-2 bottom-5 right-5 rounded-full p-1' style={{backgroundColor:"#D6FFF1"}}>
        <img src={logo} alt="" className='w-6'/>
        <p className=" text-xl font-medium">Steps Away</p>
      </div>

      <div className= " w-[100vw] h-[100vh] auth flex justify-center items-center transition-all overflow-hidden">

          <div className="w-full md:w-1/3 flex flex-col gap-5 items-end ">
                <input type="text" className={` md:me-36 w-5/6 relative ${isRegisterForm ? 'left-20':'left-10' }  md:left-0  md:w-3/5 bg-secondary  text-info p-2 ps-5 outline-none authbox hover:scale-105 transition-all placeholder:text-info`} style={{boxShadow:"rgba(19,65,59,0.3) 2px 2px "}} placeholder='username'  />

                <input type="email" className={` ${isRegisterForm ?  '':'scale-0' } md:me-32 w-5/6 relative left-10 md:left-0 md:w-3/5 bg-secondary  text-info p-2 ps-5 outline-none authbox hover:scale-105 transition-all placeholder:text-info`} style={{boxShadow:"rgba(19,65,59,0.3) 2px 2px "}} placeholder='email id'  />

                <input type="password" className={` ${isRegisterForm ? '':'relative bottom-16 ' } md:me-28 w-5/6 relative left-0 md:left-0 md:w-3/5 bg-secondary  text-info p-2 ps-5 outline-none authbox hover:scale-105 transition-all placeholder:text-info`} style={{boxShadow:"rgba(19,65,59,0.3) 2px 2px "}} placeholder='password' />

                <div className={`flex ${isRegisterForm ? 'flex-row-reverse ' : 'relative bottom-16'} gap-5 md:w-2/4 w-3/4 md:me-24 relative right-16 md:right-0`}>

                    <button className={` ${isRegisterForm ?  'bg-primary text-info flex-grow':' bg-white text-secondary' }  bg-primary text-info rounded-full  p-2 px-4  hover:scale-105 transition-all font-semibold`} style={{boxShadow:"rgba(19,65,59,0.3) 2px 2px "}}
                    onClick={()=>signup()}>
                      sign up
                    </button>

                    <button  className={`${isRegisterForm ? ' bg-white text-secondary' : 'bg-primary text-info flex-grow'}  rounded-full  p-2 px-4  hover:scale-105 transition-all font-semibold`} style={{boxShadow:"rgba(19,65,59,0.3) 2px 2px "}}
                    onClick={()=>signin()}>
                      sign in
                    </button>
              </div>


          </div>


      </div>





    </>

  )
}

export default Auth