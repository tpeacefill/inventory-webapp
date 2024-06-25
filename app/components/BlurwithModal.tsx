import React from "react";
import CustomModal from "../components/CustomModal";

interface BlurWithModalProps {
  svg: React.ReactNode;
  title: string;
  message: string;
  href: string;
}

const BlurWithModal: React.FC<BlurWithModalProps> = ({
  svg,
  title,
  message,
  href,
}) => {
  return (
    <div className="fixed inset-0 flex justify-end lg:justify-flex-end items-center z-20">
      <div className="w-full lg:w-1/2 h-full bg-custom-gray backdrop-blur-custom flex justify-center items-center">
        <div className="w-11/12 sm:w-2/5 max-w-md p-4 bg-white rounded-xl shadow-lg">
          <CustomModal svg={svg} title={title} message={message} href={href} />
        </div>
      </div>
    </div>
  );
};

export default BlurWithModal;
