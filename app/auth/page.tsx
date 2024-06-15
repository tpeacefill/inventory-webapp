'use client';
import React, { useState } from 'react';
import '../auth/page.css';
import ImageLeft from './ImageLeft';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clearEmail = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default behavior
    setEmail('');
  };

  const clearPassword = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default behavior
    setPassword('');
  };

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
                  <div className='input-wrapper'>
                    <input
                      type="email"
                      id="email"
                      className="input-field rounded border border-gray-300 bg-transparent text-gray-500 px-2 py-1 font-Poppins"
                      placeholder='Enter your email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className='input-icon' onMouseDown={clearEmail}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" fill="#6E6D7A"/>
                        <path d="M11.25 6.75L6.75 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.75 6.75L11.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label className='block text-purple-500 text-lg font-light mb-2 font-Poppins' htmlFor="password">Enter password</label>
                  <div className='input-wrapper'>
                    <input
                      type="password"
                      id="password"
                      className="input-field rounded border border-gray-300 bg-transparent text-gray-500 px-2 py-1 font-Poppins"
                      placeholder='Enter your password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className='input-icon' onMouseDown={clearPassword}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" fill="#6E6D7A"/>
                        <path d="M11.25 6.75L6.75 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.75 6.75L11.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
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