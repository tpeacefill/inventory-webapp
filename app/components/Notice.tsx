import React from "react";

const Notice = () => {
  return (
    <div  className="flex flex-col w-[90%] px-4 py-5 text-white bg-purple-500 rounded my-auto mx-auto">
      <div className="flex gap-5 justify-between text-xs text-black">
        <div className="justify-center px-2 py-2 bg-orange-50 rounded-sm">
          Test Mode
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
        >
          <path
            d="M6.91859 4.91L11.1765 0.197304C11.2479 0.118985 11.1879 0 11.0776 0H9.78316C9.70692 0 9.63393 0.0316288 9.58365 0.0858496L6.07187 3.97318L2.5601 0.0858496C2.51144 0.0316288 2.43844 0 2.36058 0H1.06617C0.955874 0 0.895858 0.118985 0.967228 0.197304L5.22515 4.91L0.967228 9.62269C0.951241 9.64015 0.940984 9.6615 0.937676 9.68421C0.934367 9.70692 0.938146 9.73003 0.948564 9.75081C0.958982 9.77158 0.975601 9.78914 0.996449 9.80141C1.0173 9.81367 1.0415 9.82012 1.06617 9.82H2.36058C2.43682 9.82 2.50981 9.78837 2.5601 9.73415L6.07187 5.84682L9.58365 9.73415C9.63231 9.78837 9.7053 9.82 9.78316 9.82H11.0776C11.1879 9.82 11.2479 9.70101 11.1765 9.62269L6.91859 4.91Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="mt-4 text-xs leading-5">
        You are in test mode. To gain full access to the inventory management
        features,please verify your account.{" "}
      </div>
      <div className="flex flex-col justify-center px-6 py-2 mt-4 w-full text-xs leading-3 bg-purple-500 border border-white border-solid">
        <div className="flex gap-1.5 pr-2 flex-row justify-center items-center">
          <div>Begin Process</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
          >
            <path
              d="M10.8477 0.98009C10.6708 1.00477 10.5249 1.13626 10.4762 1.31468C10.4276 1.49326 10.4855 1.68465 10.6238 1.80205L12.8914 3.89657C12.9805 3.97856 13.0973 4.02044 13.216 4.01297C13.3349 4.0055 13.446 3.94917 13.5249 3.85664C13.6038 3.7641 13.644 3.64267 13.6368 3.51929C13.6296 3.39575 13.5754 3.28032 13.4863 3.19834L11.2258 1.10381C11.1473 1.02832 11.0455 0.984491 10.9388 0.980106C10.9085 0.977022 10.878 0.977005 10.8477 0.98009ZM0.677467 4.45459C0.558733 4.46027 0.446879 4.51498 0.366891 4.60622C0.286748 4.69761 0.244878 4.8184 0.250501 4.94178C0.255969 5.06532 0.308616 5.18139 0.39657 5.26467C0.484525 5.34779 0.600603 5.3913 0.719488 5.38545H12.9748L10.4762 7.20439C10.2906 7.37712 10.275 7.67339 10.4412 7.86627C10.6074 8.05915 10.8925 8.07536 11.0781 7.90263L14.4586 5.26904C14.599 5.14047 14.6476 4.93478 14.5804 4.75312C14.5134 4.57162 14.3449 4.45263 14.1577 4.45458H0.719804C0.705744 4.45393 0.691528 4.45394 0.677467 4.45459Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Notice;
