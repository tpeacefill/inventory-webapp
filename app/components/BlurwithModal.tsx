import React from 'react';

const BlurWithModal: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-black bg-opacity-20 backdrop-blur-sm"></div>
    </div>
  );
}

export default BlurWithModal;