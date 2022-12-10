import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='h-24 flex justify-center items-center max-w-[1240px] px-4 mx-auto text-white  '>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          {" "}
          <Link to='/home'>Home</Link>
        </li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>
          <Link to='/footer'>About</Link>
        </li>
        <li className='p-4'>Contact</li>
      </ul>
      <div
        onClick={handleNav}
        className=' block md:hidden'
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 ease-in-out duration-500 bg-[#000300]"
            : "fixed left-[-100%]"
        }
      >
        <h1 className='w-full text-3xl font-bold m-4 text-[#00df9a]'>REACT.</h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-b-gray-600'>Home</li>
          <li className='p-4 border-b border-b-gray-600'>Company</li>
          <li className='p-4 border-b border-b-gray-600'>Resources</li>
          <li className='p-4 border-b border-b-gray-600'>About</li>
          <li className='p-4 border-b border-b-gray-600'>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
