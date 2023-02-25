import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const handleClick = () => setIsOpenNavbar((prev) => !prev);
  useEffect(() => {
    function responsiveNavbar() {
      const viewWidth = window.outerWidth;
      const sm = 640;

      if (viewWidth < sm && viewWidth > sm) {
        setIsOpenNavbar(false);
      }
    }
    responsiveNavbar();

    window.addEventListener('resize', responsiveNavbar);
  }, [isOpenNavbar]);

  return (
    <div className='absolute w-full py-11 z-10'>
      <header className='container mx-auto'>
        <nav className='flex flex-wrap justify-between items-center'>
          <div className='flex items-center text-white md:text-black z-50'>
            <img src={logo} alt='holadok' />
            <h1 className='ml-4 font-sans-pro font-black'>Holadok</h1>
          </div>
          <div
            className={`w-auto lg:hidden z-50 ${
              isOpenNavbar ? 'text-black' : 'text-black'
            }`}
            onClick={handleClick}
          >
            {!isOpenNavbar ? (
              <button>
                <FaBars className='transition duration-500 ease-out' />
              </button>
            ) : (
              <button>
                <FaTimes className='transition duration-500 ease-out z-50' />
              </button>
            )}
          </div>
          <div
            className={`w-full lg:flex lg:justify-between lg:w-10/12 lg:items-center
            ${
              isOpenNavbar
                ? 'flex flex-col items-center justify-center h-screen w-full inset-0 fixed text-white'
                : 'hidden'
            }
            
            `}
          >
            <ul className='flex lg:flex-row lg:items-center lg:justify-between lg:gap-x-10 z-20 lg:z-30'>
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
            <ul className='flex lg:flex-row lg:items-center lg:justify-between lg:gap-x-10 z-20 lg:z-30'>
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
      </header>
    </div>
  );
};

export default Navbar;
