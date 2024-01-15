import React from "react";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import twit from "../assets/tiw.svg";
import linkedin from "../assets/linkin.svg";
const Footer = () => {
  return (
    <div className="bg-navbar p-5 mt-5 rounded-2xl md:px-16 md:py-8">
      <div className="md:grid grid-cols-7">
        <div className="md:flex flex-col gap-6 col-span-3">
          <div className="col-span-3 flex gap-3 md:gap-4 items-center">
            <div className="md:h-16 h-8 rounded-lg aspect-square bg-gradient-to-br from-pink-300 to-indigo-700 "></div>
            <p className=" uppercase font-extrabold text-md md:text-3xl text-white">
              xyz
            </p>
          </div>
          <div>
            <p className="text-white text-sm font-semibold my-4 md:w-[80%]">
              A simple paragraph is comprised of three major components. The
              first sentence, which is often a declarative sentence.
            </p>
          </div>
          <div className="flex flex-row">
            <input
              className="bg-[#9A7AF159] p-1 rounded-tl-md rounded-bl-md text-xs md:text-xl px-2 md:px-6 md:py-3 font-normal"
              type="email"
              name=""
              id=""
              placeholder="Your email"
            />
            <button className="bg-getstart rounded-md -translate-x-1 p-2 text-sm md:text-xl md:px-4 text-white font-bold">
              Subscribe
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-wrap justify-between my-4 md:col-span-4">
          <div className="">
            <p className="text-md md:text-2xl font-bold text-white md:my-2">
              Platform
            </p>
            <ul className="text-sm md:text-xl font-normal text-white md:flex flex-col gap-2">
              <li>Overview</li>
              <li>Features</li>
              <li>About</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="">
            <p className="text-md font-bold md:text-2xl text-white md:my-2">
              Help
            </p>
            <ul className="text-sm font-normal md:text-xl text-white md:flex flex-col gap-2">
              <li>How does it works?</li>
              <li>Where to ask question?</li>
              <li>How to play?</li>
              <li>What is needed for this?</li>
            </ul>
          </div>
          <div>
            <p className="text-md font-bold md:text-2xl text-white md:my-2">
              Contacts
            </p>
            <ul className="text-sm font-normal md:text-xl text-white md:flex flex-col gap-2">
              <li>(012) 1234-567-890</li>
              <li>
                123 xyz xyz <br /> qwuerybaihefv, qiwu <br />- hrebcl 095467
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border border-getstart my-10"></div>
      <div className="flex justify-between items-center mt-6 md:mt-12">
        <p className="text-white md:font-normal text-[10px] md:text-xl">
          @ XYZ 20XX - 20XX. All rights reserved.
        </p>
        <div className="flex gap-2 md:gap-8 mx-3 font-light">
          <img className="size-5 md:size-8" src={fb} alt="" />
          <img className="size-5 md:size-8" src={insta} alt="" />
          <img className="size-5 md:size-8" src={twit} alt="" />
          <img className="size-5 md:size-8" src={linkedin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
