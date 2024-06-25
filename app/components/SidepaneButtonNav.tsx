"use client";
import React, { useState } from "react";

type SidepaneButtonProps = {
  icon: React.ReactNode;
  text: string;
  className?: string;
};

const SidepaneButton: React.FC<SidepaneButtonProps> = ({
  icon,
  text,
  className,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive); // Toggle the isActive state
  };

  return (
    <button
      className={`flex items-center gap-4 px-10 py-2.5 text-base whitespace-nowrap rounded mb-5 w-[198.45px] md:w-12 lg:w-[198.45px] ${
        isActive ? "bg-purple-500 bg-opacity-30" : "bg-transparent"
      } ${className}`}
      onClick={handleClick} // Handle click to toggle isActive
    >
      {icon}
      <p className="font-poppins text-black text-[15.75px] font-normal leading-normal hidden md:block lg:inline">
        {text}
      </p>
    </button>
  );
};

export default SidepaneButton;
