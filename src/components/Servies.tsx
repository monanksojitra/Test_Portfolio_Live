import React from "react";

const Servies = () => {
  const data = [1, 2, 3];
  return (
    <div className="my-3 flex flex-col md:flex-row  md:p-6  md:grid md:grid-cols-9">
      <div className=" p-4 md:col-span-3 flex flex-col mt-8">
        <p className="text-2xl lg:text-[48px] font-bold text-card leading-tight">
          Why we are better than others
        </p>
        <p className="text-[#707070] text-s lg:text-base font-semibold w-[80%] my-2">
          A simple paragraph is comprised of three major components. The first
          sentence, which is often a declarative sentence, is called the “topic
          sentence.”
        </p>
      </div>
      <div className="flex flex-col gap-5 md:flex-row overflow-x-scroll scroll-smooth no-scrollbar bg-transparent md:gap-10 md:col-span-6">
        {data.map((item) => (
          <div
            className={`rounded-3xl border  md:shadow-2xl md:shadow-slate-400 flex md:flex-col overflow-x-hidden md:gap-3 h-fit ${
              item % 2 == 0 ? "md:mt-20 flex-row-reverse  justify-between" : ""
            }`}
          >
            <img
              src="https://s3-alpha-sig.figma.com/img/5bb5/9f7e/dd95dabf3a92f90bedfbbb46fa0538ef?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mSGGQlbaNUY7x9twQkthp0eJpricjKAo2qVTp8SNo6pWcK8OHLiNqiIvOBSeaR867twsood1WkS-UbNjork0AW1JUxKU0q0kvcxmoMFDQrDvWADOQ-tScuJTJdjJJpvTJKVyAIKy56G7UKQdkRXdqHcDpAioHN5P3mU1ma~MZBb-0ArFNUGKkqBgSKf5X-yZPoMcoXWMR2mzfvAQl9mdjjZ-OKR2XM3wup-fL~6zCpGMcrwUxK7kl-7rkeBcGQcmb-Huzx2NEw8uauRGpjIQS~EDQYXcAr~SG8NphudWrdI4jLV69ail8LjId0TTV1ChjX5JBl2sTVZmhA3G3E7i9g__"
              alt=""
              className="md:w-full   size-36 aspect-square rounded-3xl"
            />
            <p className="text-base lg:text-3xl font-bold text-start w-[40%] px-3 my-5 ">
              Conventient study schedule
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servies;
