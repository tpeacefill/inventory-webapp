import React, { useState } from 'react';
import './InputField.css';

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder }) => {
  const [value, setValue] = useState('');

  const clearInput = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setValue('');
  };

  return (
    <div className="mb-4">
      <label className="block text-purple-500 text-lg font-light mb-2 font-Poppins" htmlFor={type}>
        {label}
      </label>
      <div className="input-wrapper">
        <input
          type={type}
          id={type}
          className="input-field rounded border border-gray-300 bg-transparent text-gray-500 px-2 py-1 font-Poppins"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="input-icon" onMouseDown={clearInput}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" fill="#6E6D7A"/>
            <path d="M11.25 6.75L6.75 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.75 6.75L11.25 11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InputField;