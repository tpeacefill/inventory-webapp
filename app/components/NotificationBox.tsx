import React from "react";

interface NotificationBoxProps {
  isVisible: boolean;
}

const NotificationBox: React.FC<NotificationBoxProps> = ({ isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="absolute top-16 right-5 z-50 bg-white shadow-lg p-4 border border-black border-opacity-10 rounded-tl-15 rounded-bl-15 rounded-br-15 h-[800px] w-[400px]">
      <div className="flex flex-col h-[780px] w-full items-center">
        <div className="flex flex-row justify-between items-center w-full pl-3 pr-3">
          <p className=" text-black text-[15px] font-light font-Poppins">
            Notifications
          </p>
          <p className=" text-purple-500 text-[15px] font-light font-Poppins">
            Clear all
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-[350px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M16.6667 16.6667L23.3333 23.3333M16.6667 23.3333L23.3333 16.6667M20 35C22.9667 35 25.8668 34.1203 28.3336 32.4721C30.8003 30.8238 32.7229 28.4811 33.8582 25.7403C34.9935 22.9994 35.2906 19.9834 34.7118 17.0737C34.133 14.1639 32.7044 11.4912 30.6066 9.3934C28.5088 7.29562 25.8361 5.86701 22.9264 5.28823C20.0166 4.70945 17.0006 5.0065 14.2597 6.14181C11.5189 7.27713 9.17618 9.19972 7.52796 11.6665C5.87973 14.1332 5 17.0333 5 20C5 22.48 5.6 24.8167 6.66667 26.8783L5 35L13.1217 33.3333C15.1817 34.3983 17.5217 35 20 35Z"
              stroke="black"
              stroke-opacity="0.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="text-[15px] font-light text-black text-opacity-50">
            No notifications
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationBox;
