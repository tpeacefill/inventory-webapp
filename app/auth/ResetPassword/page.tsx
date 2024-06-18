'use client';
import React, { useState } from 'react';
import ImageLeft from '../../components/ImageLeft'; 
import InputField from '@/app/components/InputField';
import BlurWithModal from '../../components/BlurwithModal'; // Import the BlurWithModal component

const ResetPassword: React.FC = () => {
  const [isBlurVisible, setIsBlurVisible] = useState(false);

  const handleBlurToggle = () => {
    setIsBlurVisible(!isBlurVisible);
  };

  return (
    <div className='bg-white min-h-screen w-screen flex justify-center items-center relative'>
      {isBlurVisible && (
        <BlurWithModal
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <circle cx="15" cy="15" r="15" fill="#9747FF"/>
  <path d="M21.5247 11.2068C21.3768 11.0597 21.1769 10.9773 20.9684 10.9773C20.7601 10.9773 20.56 11.0597 20.4122 11.2068L13.0831 18.5359C13.001 18.6131 12.8731 18.6131 12.7911 18.5359L9.58786 15.3327C9.44011 15.1859 9.24005 15.1033 9.03171 15.1033C8.8232 15.1033 8.62332 15.1859 8.47538 15.3327C8.32851 15.4807 8.24609 15.6805 8.24609 15.8891C8.24609 16.0974 8.32851 16.2975 8.47538 16.4452L12.7911 20.7609C12.8731 20.838 13.001 20.838 13.0831 20.7609L21.5249 12.3425C21.6718 12.1947 21.7542 11.9947 21.7542 11.7864C21.7542 11.5778 21.6718 11.378 21.5249 11.23L21.5247 11.2068Z" fill="white"/>
</svg>
          }
          title="Email Sent"
          message="Your password reset for your account was successful, you will be redirected to the sign in page in 5 seconds."
          href='/auth/ResetPassword'
        />
      )}
      <div className='min-h-[80vh] w-11/12 lg:w-3/4 flex flex-col lg:flex-row justify-between h-full z-10 gap-8'>
        <ImageLeft />
        <div className='flex-1 flex flex-col justify-center items-center mt-8 lg:mt-0'>
          <div className='w-4/5 flex flex-col justify-center items-center'>
            <div className='lg:mt-0 mt-10'>
              <div className='mb-8'>
                <h1 className="font-Poppins text-black text-2xl lg:text-4xl font-medium mb-4">Reset your password</h1>
                <p className='text-gray-500 font-Poppins text-lg font-light'>Set a new secured password to be able to access your account.</p>
              </div>
              <div className='w-9/12 mt-8'>
                <InputField label="Enter new password" type="password" placeholder="Enter a new password" />
                <InputField label="Confirm password" type="password" placeholder="Confirm password" />
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

export default ResetPassword;