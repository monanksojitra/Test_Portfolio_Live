import React from "react";
import Slidebutton from "../assets/Slidebutton.svg";
import PlaneCard from "./PlaneCard";

const Plans = () => {
  const data = [
    {
      id: 1,
      titel: "Start",
      subtitle:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rate: "50$",
      services: [1, 1, 0, 0, 0],
    },
    {
      id: 2,
      titel: "Advance",
      subtitle:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rate: "85$",
      services: [1, 1, 1, 1, 0],
    },
    {
      id: 3,
      titel: "Premium",
      subtitle:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rate: "100$",
      services: [1, 1, 1, 1, 1],
    },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center p-4">
        <p className="font-bold md:font-black text-2xl md:text-6xl text-card">
          Here are all our plans
        </p>
        <p className="font-semibold md:font-bold text-xs md:text-md md:w-[30%] p-2 md:p-5 text-[#707070] text-center">
          A simple paragraph is comprised of three major components. The which
          is often a declarative sentence.
        </p>
        <div className="flex justify-between items-center gap-5 md:gap-12 py-3">
          <p className="font-bold md:font-extrabold text-md md:text-4xl text-card">
            Monthly
          </p>
          <img src={Slidebutton} alt="" className="size-10 md:size-14" />
          <p className="font-bold md:font-extrabold text-md md:text-4xl text-card">
            Yearly
          </p>
        </div>
      </div>
      <div className="my-3 md:my-7 md:flex">
        {data.map((item) => (
          <PlaneCard item={item} />
        ))}
      </div>
    </>
  );
};

export default Plans;
