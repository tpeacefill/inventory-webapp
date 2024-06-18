'use client';
import React from 'react';
import ImageLeft from '../components/ImageLeft';
import InputField from '../components/InputField'; 
import Link from 'next/link';

const LoginPage: React.FC = () => {
  return (
    <div className='bg-white min-h-screen w-screen flex justify-center items-center'>
      <div className='min-h-[80vh] w-11/12 lg:w-3/4 flex flex-col lg:flex-row justify-between h-full gap-5'>
        <ImageLeft />
        <div className='flex-1 flex flex-col justify-center items-center mt-8 lg:mt-0'>
          <div className='w-4/5 flex flex-col justify-center items-center'>
            <div className='lg:mt-0 mt-10'>
              <div className='mb-8'>
                <h1 className="font-Poppins text-black text-2xl lg:text-4xl font-medium mb-4">Managing your baby products inventory, made easier!</h1>
                <p className='text-gray-500 font-Poppins text-lg font-light'>Login to access your dashboard, track stock levels, and ensure your inventory is always up-to-date.</p>
              </div>
              <div className='w-9/12 mt-8'>
                <h1 className='text-purple-500 font-Poppins text-2xl font-medium mb-6'>Log into your account</h1>
                <InputField label="Enter email" type="email" placeholder="Enter your email" />
                <InputField label="Enter password" type="password" placeholder="Enter your password" />
                <div className="w-full flex justify-end mb-4">
                  <Link href="/auth/ForgotPassword"  className='text-purple-500 text-base font-medium font-Poppins'>
                    Forgot password?
                  </Link>
                </div>
                <button className="w-full h-12 flex justify-center items-center text-white bg-purple-500 rounded text-lg font-normal font-Poppins">Log In</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;