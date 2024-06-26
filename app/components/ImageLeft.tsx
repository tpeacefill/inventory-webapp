// ImageLeft.js
import Image from "next/image";
import React from "react";

const ImageLeft = () => {
  return (
    <div
      className="flex-1 bg-cover bg-center lg:rounded-tr-[70px] lg:rounded-bl-[70px] h-[800px]"
      style={{ backgroundImage: 'url("/loginImage.png")' }}
    >
      <div className="flex flex-col justify-start items-start p-4 h-full">
        <div className="flex flex-col justify-center items-center">
          <Image src="/Logo.svg" alt="Logo" width={70} height={70} />
          <div className="flex flex-row mt-1 justify-center items-center">
            <p className="font-Poppins text-black mr-1">Little</p>
            <p className="text-xl font-medium text-purple-500 font-Poppins">
              S
            </p>
            <p className="font-Poppins text-black">tockpile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageLeft;
