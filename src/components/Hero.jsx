import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold '>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl font-bold text-4xl md:pb-2'>
          Grow with data.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='text-xl sm:text-2xl md:text-3xl font-bold py-2'>
            Fast, flexible financing for
          </p>
          <Typed
            className='text-xl sm:text-2xl md:text-3xl font-bold pl-2'
            strings={["YOU", "US"]}
            typeSpeed={120}
            backSpeed={150}
            loop
          />
        </div>
        <p className='text-lg px-3 md:text-2xl font-bold text-gray-500'>
          Monitor your data analytics to increase revenue for BTB,BTC and SASS
          platforms.
        </p>
        <button className='font-medium text-black bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
