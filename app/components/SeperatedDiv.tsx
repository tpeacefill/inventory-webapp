import React from "react";

const SeperatedDiv = ({ count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="w-[100%] h-[38px] flex justify-center items-center gap-[136.63px] mb-3"
        >
          <div className="w-[70%] h-[100%] relative flex flex-col justify-center items-start">
            <div className="w-[100%] h-[18.67px] bg-gradient-to-r from-neutral-400 to-neutral-200 rounded-[3px] transform rotate-180"></div>
            <div className="w-[70%] h-[13.84px] mt-[5.49px] bg-gradient-to-r from-neutral-400 via-neutral-200 to-neutral-200 rounded-[3px] transform rotate-180"></div>
          </div>
          <div className="w-[30%] h-[38px] relative flex flex-col justify-center items-end">
            <div className="w-[100%] h-[18.67px] bg-gradient-to-r from-neutral-400 to-neutral-200 rounded-[3px]"></div>
            <div className="w-[40%] h-[13.84px] mt-[5.49px] bg-gradient-to-r from-neutral-400 to-neutral-200 rounded-[3px]"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SeperatedDiv;
