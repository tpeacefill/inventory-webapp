// LoginPage.js
import React from 'react';
import '../auth/page.css';
import ImageLeft from './ImageLeft';

const LoginPage = () => {
  return (
    <div className='bg-white min-h-screen w-screen flex justify-center items-center'>
      <div className='min-h-[80vh] w-11/12 lg:w-3/4 flex flex-col lg:flex-row justify-between h-full'>
        
        {/* Left Side (Image Section) */}
        <ImageLeft />
        
        {/* Right Side (Login Form Section) */}
        <div className='flex-1 flex flex-col justify-center items-center mt-8 lg:mt-0'>
          <div className='w-4/5 flex flex-col justify-center items-center'>
            <div className='lg:mt-0 mt-10'>
              <div className='mb-8'>
                <h1 className="font-Poppins text-black text-2xl lg:text-4xl font-medium mb-4">Managing your baby products inventory, made easier!</h1>
                <p className='text-gray-500 font-Poppins text-lg font-light'>Login to access your dashboard, track stock levels, and ensure your inventory is always up-to-date.</p>
              </div>
              <div className='w-9/12 mt-8'>
                <h1 className='text-purple-500 font-Poppins text-2xl font-medium mb-6'>Log into your account</h1>
                <div className="mb-4">
                  <label className='block text-purple-500 text-lg font-light mb-2 font-Poppins' htmlFor="email">Enter email</label>
                  <input type="email" id="email" className="w-full h-12 rounded border border-gray-300 bg-transparent text-gray-500 px-2 py-1 font-Poppins" placeholder='Enter your email'/>
                </div>
                <div className="mb-4">
                  <label className='block text-purple-500 text-lg font-light mb-2 font-Poppins' htmlFor="password">Enter password</label>
                  <input type="password" id="password" className="w-full h-12 rounded border border-gray-300 bg-transparent text-gray-500 px-2 py-1 font-Poppins" placeholder='Enter your password'/>
                </div>
                <div className="w-full flex justify-end mb-4">
                  <a href="#" className='text-purple-500 text-base font-medium font-Poppins'>Forgot password?</a>
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