import React, { useContext, useEffect, useRef, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { assets } from '../assets/assets';

const Login = () => {
  const [currentState, setCurrentState] = useState('LOGIN');
  const { setToken, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const ref = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const ShowPassword = () => {
    if (passwordRef.current.type === 'password') {
      passwordRef.current.type = 'text';
      ref.current.src = assets.eye;
    } else {
      passwordRef.current.type = 'password';
      ref.current.src = assets.eyecross;
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'SIGNUP') {
        const res = await axios.post(backendUrl + '/api/user/register', {
          name,
          email,
          password,
        });

        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem('token', res.data.token);
          toast.success('Successfully Registered');
          navigate(from);
        } else {
          toast.error(res.data.message);
        }
      } else {
        const res = await axios.post(backendUrl + '/api/user/login', {
          email,
          password,
        });

        if (res.data.success) {
          setToken(res.data.token);
          localStorage.setItem('token', res.data.token);
          toast.success('Successfully Logged In');
          navigate(from);
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === 'LOGIN' ? null : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full px-3 py-2 border border-gray-800 bg-gray-100"
          placeholder="Name"
          required
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-3 py-2 border border-gray-800 bg-gray-100"
        placeholder="Email"
        required
      />
      <div className="relative w-full">
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          ref={passwordRef}
          type="password"
          className="w-full px-3 py-2 border border-gray-800 bg-gray-100"
          placeholder="Password"
          required
        />
        <span className="absolute right-[3px] top-0 cursor-pointer" onClick={ShowPassword}>
          <img ref={ref} src={assets.eyecross} alt="Show" className="w-9 px-2 py-2 mt-1.5" lazy-loading />
        </span>
      </div>

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your Password?</p>
        {currentState === 'LOGIN' ? (
          <p onClick={() => setCurrentState('SIGNUP')} className="cursor-pointer">
            Create account
          </p>
        ) : (
          <p onClick={() => setCurrentState('LOGIN')} className="cursor-pointer">
            Login Here
          </p>
        )}
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4 rounded-3xl cursor-pointer hover:bg-slate-800">
        {currentState === 'LOGIN' ? 'SIGN IN' : 'SIGN UP'}
      </button>
    </form>
  );
};

export default Login;
