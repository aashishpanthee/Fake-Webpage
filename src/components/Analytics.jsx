import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className='w-full px-4 py-16 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
        <img
          className='w-[500px] mx-auto animate-bounce pt-[24%]'
          src={Laptop}
          alt='laptop'
        />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] uppercase font-bold' data-aos="fade-down">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className='py-2 text-xl font-bold md:text-4xl sm:text-2xl' data-aos="fade-left">
            Manage Data Analytics Centrally
          </h1>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quos commodi ex expedita quod beatae, rerum eum
            delectus optio, sit architecto illum suscipit magnam unde esse? Amet
            quaerat rem debitis!
          </p>
          <button className='font-medium text-black bg-[#00df9a] w-[200px] rounded-md mx-auto md:mx-0 my-6 py-3'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
