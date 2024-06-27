import React from "react";

const CenteredDiv = ({ count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="w-full h-full flex flex-col justify-center items-center"
        >
          <div className="w-full h-[39.52px] bg-white shadow-[0px_1.05px_0px_rgba(0,0,0,0.10)] flex justify-center items-center">
            <div className="w-[96%] h-[50%] bg-gradient-to-r from-[#D2D2D2] to-[rgba(207.92,207.92,207.92,0.30)] rounded-[33px]" />
          </div>
        </div>
      ))}
    </>
  );
};

export default CenteredDiv;
