import React, { ReactNode, MouseEventHandler } from 'react';

interface CustomModalProps {
  svg: ReactNode;
  title: string;
  message: string;
  onClick?: MouseEventHandler<HTMLButtonElement>; // Define onClick prop
}

const CustomModal: React.FC<CustomModalProps> = ({ svg, title, message, onClick }) => {
  return (
    <div className="flex flex-col items-center font-medium tracking-tight text-center bg-white rounded-2xl">
      {svg}
      <p className="mt-4 text-black font-medium font-Poppins" style={{ 
        textAlign: 'center',  
        fontSize: '15.808px', 
        fontStyle: 'normal', 
        fontWeight: 500, 
        lineHeight: '23.185px', 
        letterSpacing: '-0.432px' 
      }}>
        {title}
      </p>
      <p className="mt-4 text-black font-Poppins" style={{ 
        textAlign: 'center', 
        fontSize: '13.7px', 
        fontStyle: 'normal', 
        fontWeight: 300, 
        lineHeight: '18.969px', 
        letterSpacing: '-0.084px', 
        color: 'rgba(0, 0, 0, 0.60)' 
      }}>
        {message}
      </p>
      <div className="self-stretch mt-6 w-full bg-black bg-opacity-10 min-h-[1px]" />
      <button className="mt-3 text-lg leading-6 text-purple-500 font-Poppins" onClick={onClick}>
        OK
      </button>
    </div>
  );
}

export default CustomModal;