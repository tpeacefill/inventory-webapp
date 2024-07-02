"use client";
import React, { useState, useEffect, useRef } from "react";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("of products");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string): void => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M4.02497 3.84171C4.08877 3.69108 4.19548 3.56257 4.33181 3.47217C4.46814 3.38178 4.62806 3.33351 4.79164 3.33337H15.2083C15.4293 3.33337 15.6413 3.42117 15.7976 3.57745C15.9538 3.73373 16.0416 3.94569 16.0416 4.16671C16.0416 4.38772 15.9538 4.59968 15.7976 4.75596C15.6413 4.91224 15.4293 5.00004 15.2083 5.00004H6.75831L10.8833 9.26254C11.0275 9.41178 11.1109 9.60947 11.1171 9.81692C11.1232 10.0244 11.0518 10.2267 10.9166 10.3842L6.60331 15.4167H15.2083C15.4293 15.4167 15.6413 15.5045 15.7976 15.6608C15.9538 15.8171 16.0416 16.029 16.0416 16.25C16.0416 16.4711 15.9538 16.683 15.7976 16.8393C15.6413 16.9956 15.4293 17.0834 15.2083 17.0834H4.79164C4.63234 17.0834 4.47637 17.0377 4.34221 16.9518C4.20805 16.8659 4.10133 16.7434 4.03468 16.5987C3.96804 16.454 3.94426 16.2932 3.96617 16.1354C3.98808 15.9776 4.05476 15.8294 4.15831 15.7084L9.15747 9.87587L4.19164 4.74587C4.07824 4.62813 4.00197 4.47962 3.97233 4.31885C3.9427 4.15809 3.961 3.99215 4.02497 3.84171Z"
            fill="black"
            fillOpacity="0.5"
          />
        </svg>
        <p className="font-Poppins">{selectedOption}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          style={{ cursor: "pointer" }}
        >
          <path
            d="M7.30007 7.3L7.60005 7.02998L13.6001 1.66581L13.0001 1L7.3001 6.0941L1.60005 1L1.0001 1.66581L7.00015 7.02998L7.30007 7.3Z"
            fill="black"
            fillOpacity="0.65"
          />
          <path
            d="M7.22982 7.37803L7.30006 7.44128L7.37032 7.37804L7.67003 7.10826L7.67029 7.10802L13.6701 1.74409L13.7487 1.67383L13.6781 1.59552L13.0782 0.929712L13.0081 0.852027L12.9302 0.921709L7.3001 5.95328L1.67002 0.921709L1.59205 0.852027L1.52205 0.929712L0.922093 1.59552L0.85153 1.67383L0.930115 1.74409L6.92989 7.10802L6.93017 7.10826L7.22982 7.37803Z"
            stroke="black"
            strokeOpacity="0.65"
            strokeWidth="0.21"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute mt-2 bg-white border border-black border-opacity-5 rounded-md w-[170px] text-black text-opacity-50 text-xs leading-4">
          <div
            className="flex gap-0.5 px-7 py-3.5 bg-white rounded-md border-b border-solid border-black border-opacity-10 cursor-pointer"
            onClick={() => handleOptionClick("of products")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.02497 3.84171C4.08877 3.69108 4.19548 3.56257 4.33181 3.47217C4.46814 3.38178 4.62806 3.33351 4.79164 3.33337H15.2083C15.4293 3.33337 15.6413 3.42117 15.7976 3.57745C15.9538 3.73373 16.0416 3.94569 16.0416 4.16671C16.0416 4.38772 15.9538 4.59968 15.7976 4.75596C15.6413 4.91224 15.4293 5.00004 15.2083 5.00004H6.75831L10.8833 9.26254C11.0275 9.41178 11.1109 9.60947 11.1171 9.81692C11.1232 10.0244 11.0518 10.2267 10.9166 10.3842L6.60331 15.4167H15.2083C15.4293 15.4167 15.6413 15.5045 15.7976 15.6608C15.9538 15.8171 16.0416 16.029 16.0416 16.25C16.0416 16.4711 15.9538 16.683 15.7976 16.8393C15.6413 16.9956 15.4293 17.0834 15.2083 17.0834H4.79164C4.63234 17.0834 4.47637 17.0377 4.34221 16.9518C4.20805 16.8659 4.10133 16.7434 4.03468 16.5987C3.96804 16.454 3.94426 16.2932 3.96617 16.1354C3.98808 15.9776 4.05476 15.8294 4.15831 15.7084L9.15747 9.87587L4.19164 4.74587C4.07824 4.62813 4.00197 4.47962 3.97233 4.31885C3.9427 4.15809 3.961 3.99215 4.02497 3.84171Z"
                fill="black"
                fillOpacity="0.5"
              />
            </svg>
            <p className="my-auto font-Poppins">of products</p>
          </div>
          <div
            className="flex gap-0.5 px-7 py-3.5 bg-white rounded-md cursor-pointer"
            onClick={() => handleOptionClick("of stock value")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.02497 3.84171C4.08877 3.69108 4.19548 3.56257 4.33181 3.47217C4.46814 3.38178 4.62806 3.33351 4.79164 3.33337H15.2083C15.4293 3.33337 15.6413 3.42117 15.7976 3.57745C15.9538 3.73373 16.0416 3.94569 16.0416 4.16671C16.0416 4.38772 15.9538 4.59968 15.7976 4.75596C15.6413 4.91224 15.4293 5.00004 15.2083 5.00004H6.75831L10.8833 9.26254C11.0275 9.41178 11.1109 9.60947 11.1171 9.81692C11.1232 10.0244 11.0518 10.2267 10.9166 10.3842L6.60331 15.4167H15.2083C15.4293 15.4167 15.6413 15.5045 15.7976 15.6608C15.9538 15.8171 16.0416 16.029 16.0416 16.25C16.0416 16.4711 15.9538 16.683 15.7976 16.8393C15.6413 16.9956 15.4293 17.0834 15.2083 17.0834H4.79164C4.63234 17.0834 4.47637 17.0377 4.34221 16.9518C4.20805 16.8659 4.10133 16.7434 4.03468 16.5987C3.96804 16.454 3.94426 16.2932 3.96617 16.1354C3.98808 15.9776 4.05476 15.8294 4.15831 15.7084L9.15747 9.87587L4.19164 4.74587C4.07824 4.62813 4.00197 4.47962 3.97233 4.31885C3.9427 4.15809 3.961 3.99215 4.02497 3.84171Z"
                fill="black"
                fillOpacity="0.5"
              />
            </svg>
            <p className="my-auto font-Poppins">of stock value</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
