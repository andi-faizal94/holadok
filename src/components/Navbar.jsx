import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const handleClick = () => setIsOpenNavbar(!isOpenNavbar);
  return (
    <div className='absolute w-full py-11 z-10'>
      <header className='container mx-auto'>
        <nav className='hidden md:flex items-center'>
          <div className='w-2/12 flex items-center'>
            <img src={logo} alt='holadok' />
            <h1 className='ml-4 font-sans-pro font-black'>Holadok</h1>
          </div>
          <div className='w-7/12'>
            <ul className='flex items-center gap-x-10'>
              <li>
                <a className='font-sans-pro' href='#home'>
                  Home
                </a>
              </li>
              <li>
                <a className='font-sans-pro' href='#features'>
                  Features
                </a>
              </li>
              <li>
                <a className='font-sans-pro' href='#blog'>
                  Blog
                </a>
              </li>
              <li>
                <a className='font-sans-pro' href='#aboutus'>
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className='w-3/12 '>
            <ul className='flex justify-end items-center gap-x-8'>
              <li>
                <a href='#login' className='font-sans-pro'>
                  Login
                </a>
              </li>
              <button className='font-sans-pro border-2 border-black py-2 px-4'>
                Book Now
              </button>
            </ul>
          </div>
        </nav>

        <nav className='flex flex-wrap md:hidden justify-between items-center z-50'>
          <div className=' flex items-center'>
            <img src={logo} alt='holadok' />
            <h1 className='ml-4 font-sans-pro font-black'>Holadok</h1>
          </div>
          <div>
            <button onClick={handleClick}>
              {!isOpenNavbar ? (
                <FaBars className='transition duration-500 ease-out' />
              ) : (
                <FaTimes className='transition duration-500 ease-out' />
              )}
            </button>
          </div>
        </nav>
      </header>
      <ul
        className={
          !isOpenNavbar
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-40 bg-white text-blue-900'
        }
      >
        <li>
          <a className='font-sans-pro' href='#home'>
            Home
          </a>
        </li>
        <li>
          <a className='font-sans-pro' href='#features'>
            Features
          </a>
        </li>
        <li>
          <a className='font-sans-pro' href='#blog'>
            Blog
          </a>
        </li>
        <li>
          <a className='font-sans-pro' href='#aboutus'>
            About Us
          </a>
        </li>
        <li>
          <a href='#login' className='font-sans-pro'>
            Login
          </a>
        </li>
        <button className='font-sans-pro border-2 border-black py-2 px-4'>
          Book Now
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
