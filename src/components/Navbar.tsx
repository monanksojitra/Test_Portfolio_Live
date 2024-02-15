import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import webicon from "./../assets/ic_baseline-language.svg";
const Navbar = () => {
  const [toggel, settoggel] = useState(false);
  const toggelbutton = () => {
    console.log("toggel");
    settoggel(!toggel);
  };
  return (
    <div className="test-navbar flex justify-between w-full md:grid grid-cols-12 md:p-8 my-3 relative">
      <div className="col-span-3 flex gap-2 md:gap-5 items-center lg:mx-12">
        <div className="md:h-11 h-8 rounded-lg aspect-square bg-gradient-to-br from-pink-300 to-indigo-700 "></div>
        <p className=" uppercase font-extrabold text-md md:text-3xl">xyz</p>
      </div>
      <div
        className={`${
          toggel ? "-right-72" : "right-0"
        } sm:hidden absolute  bg-gradient-to-br from-pink-300 to-indigo-500 w-56 h-48 rounded-2xl top-10  duration-700  ease-in-out `}
      >
        <ul className="test-xl mt-5 flex flex-col gap-4 font-semibold  items-center">
          <li className="cursor-pointer border-b-2 border-slate-500 hover:border-slate-900">
            Overview
          </li>
          <li className="cursor-pointer border-b-2 border-slate-500 hover:border-slate-900">
            Feature
          </li>
          <li className="cursor-pointer border-b-2 border-slate-500 hover:border-slate-900">
            About
          </li>
          <li className="cursor-pointer border-b-2 border-slate-500 hover:border-slate-900">
            Pricing
          </li>
        </ul>
      </div>
      <ul className="hidden    test-xl font-semibold sm:flex lg:gap-11 sm:gap-4 md:gap-7 col-span-6  items-center">
        <li>Overview</li>
        <li>Feature</li>
        <li>About</li>
        <li>Pricing</li>
      </ul>
      <div
        className="md:hidden flex items-center justify-center"
        onClick={toggelbutton}
      >
        <IoMdMenu className="size-8" />
      </div>
      <div className="col-span-3 items-center gap-3 hidden md:flex">
        <img src={webicon} className="lg:h-6 h-4" alt="" />
        <p className="lg:text-xl test-sm font-semibold">Language</p>

        <div className="bg-getstart flex items-center justify-center lg:w-28 w-14 h-full rounded-xl">
          <p className="lg:text-xl text-sm text-card">Sign up</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
