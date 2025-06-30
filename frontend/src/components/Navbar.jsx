import React,{useState,useContext} from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {showSearch,setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className='flex item-center justify-between px-2 py-5 font-medium '>

        <Link to='/'><img src={assets.final_logo} className='w-35 h-35' alt="" /></Link>

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

        <div className='flex items-center gap-8'>
        <img onClick={() => setShowSearch(!showSearch)} src={assets.search_icon} className='w-5 cursor-pointer' alt="search" />
        <div className='group relative'>
            <Link to='/login'><img src={assets.profile_icon} className='w-5 cursor-pointer' alt="profile" /></Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-3 w-36 py-3 px-5 bg-slate-100 text-gray-500 shadow-lg rounded'>
                    <p className='cursor pointer hover:text-black'>My Profile</p>
                    <p className='cursor pointer hover:text-black'>Orders</p>
                    <p className='cursor pointer hover:text-black'>Logout</p>
                </div>
            </div>
        </div>

        <Link to ='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5 cursor-pointer' alt="cart" />
            <span className='absolute -top-2 -right-2 bg-red-500 text-white aspect-square text-xs rounded-full px-1'>{getCartCount()}</span>
        </Link>

        {/* sidebar menu */}
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="menu" />
          </div>


          <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-[#f9f6f0] transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-700'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="dropdown" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} to='/' className='  py-2 pl-6 border cursor-pointer'>
                        HOME
                    </NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/collection' className='  py-2 pl-6 border cursor-pointer'>
                        COLLECTION
                    </NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/about' className='  py-2 pl-6 border cursor-pointer'>
                        ABOUT
                    </NavLink>
                    <NavLink onClick={() => setVisible(false)} to='/contact' className='  py-2 pl-6 border cursor-pointer'>
                        CONTACT
                    </NavLink>
                </div>
          </div>
    </div>
  )
}

export default Navbar
