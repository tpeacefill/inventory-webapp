import React, { ReactNode } from 'react';

type SidepaneButtonNavProps = {
  svg: ReactNode; // ReactNode allows any JSX/React element
  text: string;
  isActive: boolean;
};

const SidepaneButtonNav: React.FC<SidepaneButtonNavProps> = ({ svg, text, isActive }) => {
  return (
    <button
      className={`flex gap-4 px-10 py-2 text-base whitespace-nowrap rounded ${
        isActive ? 'bg-purple-500 bg-opacity-30' : 'bg-transparent'
      }`}
    >
      {svg}
      <p className='font-poppins'>{text}</p>
    </button>
  );
};

export default SidepaneButtonNav;