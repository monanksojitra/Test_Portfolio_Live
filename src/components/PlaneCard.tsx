import React from "react";

const PlaneCard = ({item}) => {
  return (
    <div className="border rounded-xl md:rounded-3xl shadow-2xl m-5">
      <div className="flex flex-col justify-center items-center px-3 py-4">
        <p className="text-2xl md:text-4xl font-extrabold text-card py-3">
          {item.titel}
        </p>
        <p className="text-xs md:text-base font-medium text-black py-5 text-center">
          A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <p className="text-getstart text-4xl md:text-6xl font-black py-2">
          {item.rate}
          <span className="text-black text-sm md:text-xl font-light">
            /month
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-2 md:gap-4 my-2">
        <div className="flex items-center ml-9 gap-4 ">
          <div
            className={`h-4  md:h-6 rounded-full aspect-square  ${
              item.services[0] ? "bg-[#39DC98]" : "bg-[#FD809E]"
            } `}
          ></div>
          <p className="text-sm md:text-xl text-black font-medium">
            Videos of Lessons
          </p>
        </div>
        <div className="flex items-center ml-9 gap-4 ">
          <div
            className={`h-4  md:h-6 rounded-full aspect-square ${
              item.services[1] ? "bg-[#39DC98]" : "bg-[#FD809E]"
            } `}
          ></div>
          <p className="text-sm md:text-xl text-black font-medium">
            Homework check
          </p>
        </div>
        <div className="flex items-center ml-9 gap-4 ">
          <div
            className={`h-4  md:h-6 rounded-full aspect-square ${
              item.services[2] ? "bg-[#39DC98]" : "bg-[#FD809E]"
            } `}
          ></div>
          <p className="text-sm md:text-xl text-black font-medium">
            Additional practical task
          </p>
        </div>
        <div className="flex items-center ml-9 gap-4">
          <div
            className={`h-4  md:h-6 rounded-full aspect-square ${
              item.services[3] ? "bg-[#39DC98]" : "bg-[#FD809E]"
            } `}
          ></div>
          <p className="text-sm md:text-xl text-black font-medium">
            Monthly conferences
          </p>
        </div>
        <div className="flex items-center ml-9 gap-4 ">
          <div
            className={`h-4  md:h-6 rounded-full aspect-square ${
              item.services[4] ? "bg-[#39DC98]" : "bg-[#FD809E]"
            } `}
          ></div>
          <p className="text-sm md:text-xl text-black font-medium">
            Personal advice from teachers
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
        <button className="border border-getstart px-7 py-2 md:py-3 md:px-9 my-5 rounded-xl  text-getstart md:text-md font-bold">
          Get started
        </button>
      </div>
    </div>
  );
};

export default PlaneCard;
