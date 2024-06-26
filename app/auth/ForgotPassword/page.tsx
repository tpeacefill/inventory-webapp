'use client';
import React, { useState } from 'react';
import ImageLeft from '../../components/ImageLeft'; 
import InputField from '@/app/components/InputField';
import BlurWithModal from '../../components/BlurwithModal'; // Import the BlurWithModal component

const ForgotPassword: React.FC = () => {
  const [isBlurVisible, setIsBlurVisible] = useState(false);

  const handleBlurToggle = () => {
    setIsBlurVisible(!isBlurVisible);
  };

  return (
    <div className='bg-white min-h-screen w-screen flex justify-center items-center relative'>
      {isBlurVisible && (
        <BlurWithModal
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="36"
              viewBox="0 0 33 36"
              fill="none"
            >
              <path
                d="M32.1 14.0547C32.1 13.8917 32.0283 13.7362 31.9042 13.63L28.7604 10.9453V6.36231C28.7604 5.48116 28.0405 4.76418 27.1557 4.76418L21.5596 4.76446C21.5543 4.75942 21.5506 4.75382 21.5447 4.74933L16.6319 0.588359C16.4212 0.410442 16.112 0.411281 15.9021 0.59004L11.0147 4.76443H5.22105C4.33629 4.76443 3.61638 5.48141 3.61638 6.36256V11.0822L0.63233 13.6307C0.507981 13.7369 0.436523 13.8921 0.436523 14.0555C0.436523 14.0616 0.438211 14.0678 0.438493 14.074V33.6738C0.438493 34.4788 1.09623 35.1338 1.90394 35.1338L30.6361 35.1333C31.4444 35.1333 32.1016 34.4782 32.1016 33.6733L32.1018 14.0547L32.1 14.0547ZM11.9187 24.1172L1.56158 32.9617V15.2726L11.9187 24.1172ZM12.7813 24.854L15.9023 27.5194C16.0072 27.609 16.1378 27.6541 16.2678 27.6541C16.3977 27.6541 16.5283 27.609 16.6332 27.5194L19.7542 24.854L30.4801 34.0134H2.05473L12.7813 24.854ZM20.6177 24.1174L30.9792 15.2693V32.9655L20.6177 24.1174ZM30.676 14.0542L28.7601 15.6899V12.4183L30.676 14.0542ZM16.2699 1.7496L19.829 4.76375H12.7407L16.2699 1.7496ZM5.2214 5.88224H27.1564C27.4219 5.88224 27.638 6.09742 27.638 6.36191V11.0939C27.6262 11.1592 27.6265 11.225 27.638 11.2903V16.6496L16.269 26.357L4.74085 16.5119V6.36122C4.74113 6.09645 4.95691 5.88183 5.2222 5.88183L5.2214 5.88224ZM3.61731 12.5547V15.5537L1.86126 14.0545L3.61731 12.5547ZM16.189 20.6454C17.341 20.6454 18.4751 20.3462 19.4693 19.7803C19.7385 19.627 19.8319 19.2852 19.678 19.017C19.5236 18.7489 19.1809 18.6556 18.9117 18.8091C18.0868 19.2787 17.1453 19.5272 16.189 19.5272C13.1585 19.5272 10.6932 17.0718 10.6932 14.0539C10.6932 11.0361 13.1588 8.58055 16.189 8.58055C19.2191 8.58055 21.6844 11.036 21.6844 14.0539C21.6844 15.9627 20.8159 16.6865 20.2325 16.7075C19.7889 16.7271 19.4614 16.3718 19.4144 15.8095V14.1494C19.4153 14.1174 19.4195 14.0863 19.4195 14.0538C19.4195 14.0213 19.4153 13.9902 19.4144 13.9583V11.4025C19.4144 11.0934 19.1629 10.8429 18.8526 10.8429C18.5423 10.8429 18.2908 11.0934 18.2908 11.4025V11.6165C17.7254 11.1321 16.9917 10.8371 16.1887 10.8371C14.4077 10.8371 12.9585 12.2803 12.9585 14.0541C12.9585 15.828 14.4076 17.2712 16.1887 17.2712C17.0397 17.2712 17.8125 16.9392 18.3901 16.4018C18.6514 17.281 19.3826 17.8576 20.2724 17.8257C21.4934 17.7817 22.8072 16.5834 22.8072 14.0545C22.8072 10.4197 19.8383 7.46273 16.1884 7.46273C12.5382 7.46273 9.56999 10.4192 9.56999 14.0537C9.56999 17.6885 12.5391 20.6455 16.189 20.6455L16.189 20.6454ZM16.189 16.1521C15.0268 16.1521 14.0819 15.2107 14.0819 14.0536C14.0819 12.8964 15.0271 11.955 16.189 11.955C17.3183 11.955 18.2404 12.8451 18.2911 13.958V14.1491C18.2408 15.262 17.3189 16.1521 16.189 16.1521V16.1521Z"
                fill="#9747FF"
              />
            </svg>
          }
          title="Email Sent"
          message="We’ve sent an email to peacefillt**@outlook.com with a link to reset your password"
          href='/auth/ResetPassword'
        />
      )}
      <div className='min-h-[80vh] w-11/12 lg:w-3/4 flex flex-col lg:flex-row justify-between h-full z-10 gap-8'>
        <ImageLeft />
        <div className='flex-1 flex flex-col justify-center items-center mt-8 lg:mt-0'>
          <div className='w-4/5 flex flex-col justify-center items-center'>
            <div className='lg:mt-0 mt-10'>
              <div className='mb-8'>
                <h1 className="font-Poppins text-black text-2xl lg:text-4xl font-medium mb-4">Forgot your password?</h1>
                <p className='text-gray-500 font-Poppins text-lg font-light'>Let’s help you reset your password, to access your account</p>
              </div>
              <div className='w-9/12 mt-8'>
                <InputField label="Enter your email" type="email" placeholder="Enter your email" />
                <div className="w-full flex justify-end mb-4">
                </div>
                <button 
                  onClick={handleBlurToggle} 
                  className="w-full h-12 flex justify-center items-center text-white bg-purple-500 rounded text-lg font-normal font-Poppins">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
