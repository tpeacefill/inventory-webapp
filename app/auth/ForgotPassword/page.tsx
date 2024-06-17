'use client';
import React from 'react';
import ImageLeft from '../../components/ImageLeft'; // Ensure the path is correct
import InputField from '@/app/components/InputField'

const ForgotPassword: React.FC = () => {
  return (
    <div className='bg-white min-h-screen w-screen flex justify-center items-center'>
      <div className='min-h-[80vh] w-11/12 lg:w-3/4 flex flex-col lg:flex-row justify-between h-full'>
        <ImageLeft />
        <div className='flex-1 flex flex-col justify-center items-center mt-8 lg:mt-0'>
          <div className='w-4/5 flex flex-col justify-center items-center'>
            <div className='lg:mt-0 mt-10'>
              <div className='mb-8'>
                <h1 className="font-Poppins text-black text-2xl lg:text-4xl font-medium mb-4">Forgot your password?</h1>
                <p className='text-gray-500 font-Poppins text-lg font-light'>Let’s help you reset your password, to access your account </p>
              </div>
              <div className='w-9/12 mt-8'>
                <InputField label="Enter email" type="email" placeholder="Enter your email" />
                <div className="w-full flex justify-end mb-4">
                </div>
                <p className='font-Poppins text-base font-light text-purple-500 mb-4'>Enter email associated with account</p>
                <button className="w-full h-12 flex justify-center items-center text-white bg-purple-500 rounded text-lg font-normal font-Poppins">Log In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;