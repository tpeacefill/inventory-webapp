import React from 'react';

type SidepaneButtonProps = {
  icon: React.ReactNode;
  text: string;
  className?: string;
};

const SidepaneButton: React.FC<SidepaneButtonProps> = ({ icon, text, className }) => {
  return (
    <button className={`flex gap-4 px-10 py-2.5 text-base whitespace-nowrap rounded bg-purple-500 bg-opacity-30 mb-5 w-[198.45px] ${className}`}>
      {icon}
      <p className='font-poppins text-black text-[15.75px] font-normal leading-normal'>{text}</p>
    </button>
  );
};

export default SidepaneButton;
