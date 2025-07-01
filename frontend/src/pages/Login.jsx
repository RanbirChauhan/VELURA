import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import {useRef} from 'react'
import { assets } from '../assets/assets';

const Login = () => {

  const [currentState,setCurrentState] = useState('LOGIN');
  const { token , setToken, navigate, backendUrl } = useContext(ShopContext)

  const [name,setName] = useState('')
  const [password,setPassword] = useState('')
  const [email,setEmail] = useState('')
  const ref = useRef();
  const passwordRef = useRef();

 const ShowPassword = () => {
  if (passwordRef.current.type === "password") {
    passwordRef.current.type = "text";
    ref.current.src = assets.eye; // set to eye icon
  } else {
    passwordRef.current.type = "password";
    ref.current.src = assets.eyecross; // set to eyecross icon
  }
};


  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {

      if(currentState === 'SIGNUP'){

        const response = await axios.post(backendUrl + '/api/user/register',{name,email,password})
        if(response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
          toast.success("Successfully Registered")
        }
        else{
          toast.error(response.data.message)
        }
      }
      else{

        const response = await axios.post(backendUrl + '/api/user/login',{email,password})
        if(response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        }
        else{
          toast.error(response.data.message)
        }

      }

    } catch (error) {
      console.error(error.message)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
          <div className='inline-flex items-center gap-2 mb-2 mt-10'>
              <p className='prata-regular text-3xl'>{currentState}</p>
              <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
          </div>

          {currentState === 'LOGIN' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800 bg-gray-100' placeholder='Name' required/>}
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800 bg-gray-100' placeholder='Email' required/>
          <div className='relative w-full'>
          <input onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          ref={passwordRef} 
          type="password" 
          className='w-full px-3 py-2 border border-gray-800 bg-gray-100' 
          placeholder='Password' required/>
          
          <span
                className="absolute right-[3px] top-0 cursor-pointer"
                onClick={ShowPassword}
              >
                <img
                  ref={ref}
                  src={assets.eyecross}
                  alt="Show"
                  className="w-9 px-2 py-2 mt-1.5 "
                ></img>
              </span>

          
          </div>
          

          <div className='w-full flex justify-between text-sm mt-[-8px]'>
            <p className='cursor-pointer'> Forgot your Password? </p>

            {
              currentState === 'LOGIN'
              ? <p onClick={() => setCurrentState('SIGNUP')} className='cursor-pointer'>Create account</p>
              : <p onClick={() => setCurrentState('LOGIN')} className='cursor-pointer'>Login Here</p>
            }
          </div>

          <button  className='bg-black text-white font-light px-8 py-2 mt-4 rounded-3xl cursor-pointer hover:bg-slate-800'>{currentState==='LOGIN' ? 'SIGN IN' : 'SIGN UP'} </button>
    </form>
  )
}

export default Login
