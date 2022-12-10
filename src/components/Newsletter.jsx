import React from "react";

function Newsletter() {
  return (
    <div className='w-full py-5 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 text-center lg:text-start my-auto'>
          <h1 className='md:text-4xl sm:text-3xl text-xl font-bold'>
            Want tips and tricks to optize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row sm:gap-1 items-center justify-between w-full'>
            <input
              className='flex p-3 w-full rounded-md text-black'
              type='text'
              placeholder='Enter Email'
            />
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>
          <p className='text-center lg:text-start '>
            We care about the protection of your data. Read our Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
