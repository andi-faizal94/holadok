import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <div className='absolute w-full py-11 z-10'>
      <header className='container mx-auto'>
        <nav className='flex items-center'>
          <div className='w-2/12 flex items-center'>
            <img src={logo} alt='holadok' />
            <h1 className='ml-4 font-sans-pro font-black'>Holadok</h1>
          </div>
          <div className='w-7/12'>
            <ul className='flex items-center gap-x-10'>
              <li>
                <a className='font-sans-pro' href=''>
                  Home
                </a>
              </li>
              <li>
                <a className='font-sans-pro' href=''>
                  Features
                </a>
              </li>
              <li>
                <a className='font-sans-pro' href=''>
                  Blog
                </a>
              </li>
              <li>
                <a className='font-sans-pro' href=''>
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className='w-3/12 '>
            <ul className='flex justify-end items-center gap-x-8'>
              <li>
                <a href='' className='font-sans-pro'>
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
