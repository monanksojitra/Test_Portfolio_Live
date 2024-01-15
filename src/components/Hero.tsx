import React from "react";
import img from "../assets/hero.png";
const Hero = () => {
  return (
    <div className="lg:h-[490px]  bg-gray-700 md:mx-12 rounded-br-[90px] lg:rounded-br-[160px] rounded-3xl bg-gradient-to-br from-pink-300 to-indigo-500 flex flex-row  md:p-11 p-5">
      <div className="flex flex-col justify-between gap-2 lg:gap-4 md:w-[80%]">
        <p className="text-xl md:text-[42px] lg:text-[57px] font-bold text-white md:leading-snug">
          Develop your skills <br /> without diligence
        </p>
        <p className="text-hero text-xs lg:text-2xl font-medium md:w-[90%] w-[80%]">
          A good example of a paragraph contains a topic sentence, details and a
          conclusion. There are many different kinds of animals that live in
          China.
        </p>
        <div className="flex gap-4 my-4 text-white text-sm">
          <div className="bg-getstart lg:p-3 p-2 content-center text-center  lg:w-40">
            Get Started
          </div>
          <div className="bg-getstart lg:p-3 p-2 content-center text-center lg:w-40">
            Discount
          </div>
        </div>
      </div>
      <div className="md:h-max md:w-auto my-auto">
        <img src={img} alt="" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Hero;
