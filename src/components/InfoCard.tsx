import React from "react";

type Item = {
  id: number;
  src: string;
  titel1: string;
  titel2: string;
  subtitel: string;
};

const InfoCard = ({ data }) => {
  return (
    <div className="rounded-xl md:grid md:grid-cols-5 my-3 md:p-7 ">
      <div className={`md:col-span-2 ${data.id % 2 == 0 ? "md:order-2" : ""}`}>
        <img src={data.src} className="rounded-xl md:h-96 md:w-full" />
      </div>
      <div
        className={`p-3 md:my-auto md:col-span-3 md:w-[90%]  ${
          data.id % 2 == 0 ? "md:order-1 md:ml-8" : ""
        }`}
      >
        <p className="text-xl font-bold text-card md:text-5xl">
          {data.titel1}
          <span className="text-getstart"> {data.titel2}</span>
        </p>
        <p className="text-md md:text-2xl mt-2 md:mt-8 font-medium text-[#707070]">
          {data.subtitel}
        </p>
        <div className="bg-getstart w-[30%] my-4 text-white flex items-center justify-center font-bold">
          <p className="p-3 text-xs">Get Started</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
