import React, { useState, useContext, useEffect, useRef } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const { showSearch, setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
  const location = useLocation();
  const isCollectionPage = location.pathname === '/collection';
  const profileRef = useRef();

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
    setProfileMenuOpen(false);
  };

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='flex items-center justify-between px-2 py-5 font-medium relative'>

      <Link to='/'><img src={assets.final_logo} className='w-35 h-35' alt="" /></Link>

      {/* Desktop Navigation */}
      <ul className='hidden sm:flex gap-8 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center justify-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/collection' className='flex flex-col items-center justify-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/about' className='flex flex-col items-center justify-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

        <NavLink to='/contact' className='flex flex-col items-center justify-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
      </ul>

      {/* Right-side icons */}
      <div className='flex items-center gap-8'>
        {isCollectionPage && (
          <img
            onClick={() => setShowSearch(!showSearch)}
            src={assets.search_icon}
            className='w-5 cursor-pointer'
            alt='search'
            lazy-loading
          />
        )}

        {/* Profile Dropdown */}
        <div className='relative' ref={profileRef}>
          <img
            onClick={() => {
              if (!token) {
                navigate('/login');
              } else {
                setProfileMenuOpen((prev) => !prev);
              }
            }}
            src={assets.profile_icon}
            className='w-5 cursor-pointer'
            alt="profile"
            lazy-loading
          />
          {token && profileMenuOpen && (
            <div className='absolute right-0 pt-4 z-10'>
              <div className='flex flex-col gap-3 w-36 py-3 px-5 bg-slate-100 text-gray-500 shadow-lg rounded cursor-pointer'>
                <p className='hover:text-black'>My Profile</p>
                <p onClick={() => { navigate('/orders'); setProfileMenuOpen(false); }} className='hover:text-black'>Orders</p>
                <p onClick={logout} className='hover:text-black'>Logout</p>
              </div>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <div
          onClick={() => {
            if (getCartCount() > 0) {
              navigate('/cart');
            } else {
              toast.warn("Your cart is empty!", { position: "top-center" });
            }
          }}
          className='relative cursor-pointer'
        >
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="cart" />
          <span className='absolute -top-2 -right-2 bg-red-500 text-white aspect-square text-xs rounded-full px-1'>
            {getCartCount()}
          </span>
        </div>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className='w-5 cursor-pointer sm:hidden'
          alt="menu"
          lazy-loading
        />
      </div>

      {/* Sidebar Menu for Mobile */}
     {/* Sidebar Menu with Backdrop and Slide-in Effect */}
{visible && (
  <div className='fixed inset-0 z-40'>

    {/* Backdrop */}
    <div
      className='absolute inset-0 bg-black opacity-40'
      onClick={() => setVisible(false)}
    ></div>

    {/* Slide-in Sidebar */}
    <div className='absolute top-0 right-0 h-full w-64 bg-[#f9f6f0] z-50 shadow-lg overflow-y-auto transform transition-transform duration-300 translate-x-0'>
      <div className='flex flex-col text-gray-700'>
        <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
          <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="dropdown" lazy-loading />
          <p>Back</p>
        </div>
        <NavLink onClick={() => setVisible(false)} to='/' className=' py-2 pl-6 border cursor-pointer'>HOME</NavLink>
        <NavLink onClick={() => setVisible(false)} to='/collection' className='py-2 pl-6 border cursor-pointer'>COLLECTION</NavLink>
        <NavLink onClick={() => setVisible(false)} to='/about' className='py-2 pl-6 border cursor-pointer'>ABOUT</NavLink>
        <NavLink onClick={() => setVisible(false)} to='/contact' className='py-2 pl-6 border cursor-pointer'>CONTACT</NavLink>
      </div>
    </div>
    
  </div>
)}
</div>
  );
};

export default Navbar;
