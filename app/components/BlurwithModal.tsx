import React from 'react';
import CustomModal from '../components/CustomModal';

const BlurWithModal: React.FC = () => {
  return (
    <div className="fixed inset-0 flex justify-end items-center z-20">
      <div className="w-1/2 h-full bg-custom-gray backdrop-blur-custom flex justify-center items-center">
        <div className="w-11/12 sm:w-2/5 max-w-md p-4 bg-white rounded-xl shadow-lg">
          <CustomModal />
        </div>
      </div>
    </div>
  );
}

export default BlurWithModal;