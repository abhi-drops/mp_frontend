import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logoblack.svg'
import { loginAPI, registerAPI } from '../services/allAPI';
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from '../assets/ContextAPI/UserContext';

function Auth({register}) {

  const [userResponse, setUserResponse] = useContext(UserContext);

  const isRegisterForm=register?true:false;
  const navigate = useNavigate()
  const [userData , setUserData] = useState({
    userName:"",userEmail:"",userPassword:""
  })

   async function signin(e){
    console.log("signin");

    if (isRegisterForm) {
      navigate(`/login`)
    }else{
      // logincode
      e.preventDefault()
      const {userName,userPassword}=userData

      if (!userName || !userPassword) {
        toast.warning("please fill empty fields")
      }else{
        // alert("proceed to api call")

        try {
          toast.warning('warning : Due to the use of a free server,sometimes it may take up to 30 seconds for the connection to establish after the website initially launches.')
          const result = await loginAPI({userName,userPassword})
          console.log(result);
          if (result.status === 200) {
            sessionStorage.setItem("username",result.data.updatedUser.userName)
            sessionStorage.setItem("token",result.data.token)
            setUserData({userName:"",userPassword:""})
            setUserResponse(result.data.updatedUser)
            if (result.data.updatedUser.isUserAdmin) {
              console.log("is admin");

              navigate(`/adminhome`)
            }else{

              navigate(`/`)
            }
          }else{
            toast.warning(result.response.data)
          }

        } catch (error) {
          console.log(error);
          toast.warning('Server connection error: Due to the use of a free server,sometimes it may take up to 30 seconds for the connection to establish after the website initially launches.')
        }
      }
    }


  }

  const signup= async(e)=> {
    e.preventDefault()

    console.log("signup");
    if (isRegisterForm) {
      // register code
      const {userName,userEmail,userPassword}=userData

      if (!userName || !userEmail || !userPassword) {
        toast.warning("please fill empty fields")
      }else{
        // alert("proceed to api call")

        try {
          toast.warning('warning : Due to the use of a free server,sometimes it may take up to 30 seconds for the connection to establish after the website initially launches.')
          const result = await registerAPI(userData)
          console.log(result);
          if (result.status === 200) {
            toast.success(`${result.data.userName} has successfully registered`)
            navigate(`/login`)
            setUserData({userName:"",userEmail:"",userPassword:""})
          }else{
            toast.error(result.response.data)
          }

        } catch (error) {
          console.log(error);
        }
      }

    }else{
      navigate(`/register`)
    }
  }

  return (
    <>
    <ToastContainer
    position="top-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    transition={Flip}
     />
    <div className='flex fixed items-center gap-2 bottom-5 right-5 rounded-full p-1' style={{backgroundColor:"#D6FFF1"}}>
        <img src={logo} alt="" className='w-6'/>
        <p className=" text-xl font-medium">Steps Away</p>
      </div>

      <div className= " w-[100vw] h-[100vh] auth flex justify-center items-center transition-all overflow-hidden">

          <div className="w-full md:w-1/3 flex flex-col gap-5 items-end ">
                <input type="text" className={` md:me-36 w-5/6 relative ${isRegisterForm ? 'left-20':'left-10' }  md:left-0  md:w-3/5 bg-secondary  text-info p-2 ps-5 outline-none authbox hover:scale-105 transition-all placeholder:text-info`} style={{boxShadow:"rgba(19,65,59,0.3) 2px 2px "}} placeholder='username' onChange={e=> setUserData({...userData,userName:e.target.value})} value={userData.userName}  />

                <input type="email" className={` ${isRegisterForm ?  '':'scale-0' } md:me-32 w-5/6 relative left-10 md:left-0 md:w-3/5 bg-secondary  text-info p-2 ps-5 outline-none authbox hover:scale-105 transition-all placeholder:text-info`} style={{boxShadow:"rgba(19,65,59,0.3) 2px 2px "}} placeholder='email id' onChange={e=> setUserData({...userData,userEmail:e.target.value})} value={userData.userEmail}  />

                <input type="password" className={` ${isRegisterForm ? '':'relative bottom-16 ' } md:me-28 w-5/6 relative left-0 md:left-0 md:w-3/5 bg-secondary  text-info p-2 ps-5 outline-none authbox hover:scale-105 transition-all placeholder:text-info`} style={{boxShadow:"rgba(19,65,59,0.3) 2px 2px "}} placeholder='password' onChange={e=> setUserData({...userData,userPassword:e.target.value})} value={userData.userPassword} />

                <div className={`flex ${isRegisterForm ? 'flex-row-reverse ' : 'relative bottom-16'} gap-5 md:w-2/4 w-3/4 md:me-24 relative right-16 md:right-0`}>

                    <button className={` ${isRegisterForm ?  'bg-primary text-info flex-grow':' bg-white text-secondary' }  bg-primary text-info rounded-full  p-2 px-4  hover:scale-105 transition-all font-semibold`} style={{boxShadow:"rgba(19,65,59,0.3) 2px 2px "}}
                    onClick={(e)=>signup(e)}>
                      sign up
                    </button>

                    <button  className={`${isRegisterForm ? ' bg-white text-secondary' : 'bg-primary text-info flex-grow'}  rounded-full  p-2 px-4  hover:scale-105 transition-all font-semibold`} style={{boxShadow:"rgba(19,65,59,0.3) 2px 2px "}}
                    onClick={(e)=>signin(e)}>
                      sign in
                    </button>
              </div>


          </div>


      </div>





    </>

  )
}

export default Auth