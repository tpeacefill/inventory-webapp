import React from 'react';
import Image from 'next/image';

const Menubar = () => {
  return (
    <div className="flex justify-between items-center px-5 py-3 bg-white border-b border-black border-opacity-10 max-md:flex-wrap gap-5">
      <div className="flex items-center gap-4 text-black">
      <Image src="/Logo.svg" alt="Logo" width={51} height={51} className="hidden sm:block" />
        <div className="hidden sm:flex items-center gap-1 text-base whitespace-nowrap mr-6">
          <p className="flex-grow font-Poppins">Little</p>
          <div className="flex items-baseline">
            <p className="text-2xl font-medium text-purple-500 font-Poppins">S</p>
            <p className="text-base font-Poppins">tockpile</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-base font-medium font-Poppins">Welcome back</h1>
          <p className="text-xs font-Poppins">Fri, June 7</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="relative inline-flex items-center">
          {/* SVG icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="25" viewBox="0 0 23 25" fill="none">
            <path d="M20.4154 17.1311C20.0823 16.9213 19.7841 16.6656 19.5287 16.3709C18.6362 15.3405 18.5572 14.1724 18.5645 13.715V10.5388C18.5645 7.63686 16.7418 5.14551 14.1621 4.11075C14.2672 3.81706 14.3212 3.50949 14.3212 3.19366C14.3212 1.66561 13.0555 0.422363 11.4999 0.422363C9.94423 0.422363 8.67857 1.66561 8.67857 3.19349C8.67857 3.50928 8.73257 3.81687 8.83767 4.11058C6.258 5.14538 4.43519 7.63656 4.43519 10.5386V13.718C4.44271 14.1724 4.36358 15.3405 3.471 16.3707C3.21568 16.6654 2.91748 16.9211 2.58438 17.1309C1.59232 17.756 1 18.8244 1 19.9891V21.4571C1 21.5622 1.08699 21.6476 1.19448 21.6476H8.48354C8.58385 23.1966 9.89821 24.4268 11.5 24.4268C13.1018 24.4268 14.4161 23.1966 14.5165 21.6476H21.8055C21.9128 21.6476 22 21.5624 22 21.4571V19.9891C22 18.8244 21.4074 17.756 20.4154 17.1311ZM11.4997 0.803432C12.8409 0.803432 13.9321 1.87574 13.9321 3.19366C13.9321 3.46324 13.8866 3.72544 13.7981 3.97611C13.5392 3.88837 13.2736 3.8152 13.0021 3.75727C13.0716 3.57811 13.1085 3.38722 13.1085 3.19368C13.1085 2.3225 12.3869 1.61356 11.4996 1.61356C10.6125 1.61356 9.89061 2.32233 9.89061 3.19368C9.89061 3.38724 9.92753 3.57813 9.99708 3.75727C9.7257 3.8152 9.45998 3.88837 9.20107 3.97611C9.11255 3.72545 9.06709 3.46324 9.06709 3.19366C9.06743 1.87557 10.1585 0.803432 11.4997 0.803432ZM12.7197 3.19349C12.7197 3.36378 12.6825 3.53122 12.6122 3.68493C12.2498 3.62834 11.8783 3.5987 11.4997 3.5987C11.1211 3.5987 10.7498 3.62851 10.3872 3.68493C10.3169 3.53122 10.2797 3.36378 10.2797 3.19349C10.2797 2.53226 10.8271 1.99443 11.4997 1.99443C12.1724 1.99443 12.7197 2.53243 12.7197 3.19349ZM11.4997 24.0455C10.1124 24.0455 8.97284 22.9861 8.87305 21.6473H14.126C14.0264 22.9861 12.887 24.0455 11.4997 24.0455ZM21.6106 21.2663H1.38883V19.9887C1.38883 18.9543 1.91434 18.0057 2.79462 17.4514C3.15999 17.2213 3.48726 16.9405 3.76751 16.6172C4.74553 15.4881 4.83219 14.209 4.82397 13.7147V10.5385C4.82397 6.92183 7.81873 3.97937 11.4997 3.97937C15.1806 3.97937 18.1754 6.92166 18.1754 10.5385V13.7117C18.1672 14.2091 18.2538 15.4882 19.2318 16.6173C19.5119 16.9406 19.8392 17.2213 20.2047 17.4513C21.085 18.0059 21.6105 18.9544 21.6105 19.9887L21.6106 21.2663Z" fill="black" stroke="black" strokeWidth="0.21"/>
          </svg>
          <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-0.125/4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7.35" fill="#D32121"/>
              <text x="8" y="8" textAnchor="middle" fill="white" fontSize="10px" fontFamily="Poppins" dy=".3em">3</text>
            </svg>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-1 h-9 bg-purple-500 rounded-none" />
          <div className="flex flex-col sm-flex-row">
            <p className="text-base text-purple-500 font-Poppins">Status: Active</p>
            <div className="flex gap-5 text-xs font-light text-black">
              <p className="font-Poppins">Kwame</p>
              <p className="flex-auto font-Poppins">ID: 34892176</p>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8" fill="none">
                        <path d="M7.55007 7.20027L7.85005 6.93025L13.8501 1.56608L13.2501 0.900269L7.5501 5.99437L1.85005 0.900268L1.2501 1.56608L7.25015 6.93025L7.55007 7.20027Z" fill="black" fillOpacity="0.65"/>
            <path d="M7.47982 7.2783L7.55006 7.34155L7.62032 7.27831L7.92003 7.00853L7.92029 7.00829L13.9201 1.64436L13.9987 1.5741L13.9281 1.49579L13.3282 0.829981L13.2581 0.752295L13.1802 0.821978L7.5501 5.85355L1.92002 0.821977L1.84205 0.752295L1.77205 0.82998L1.17209 1.49579L1.10153 1.5741L1.18011 1.64436L7.17989 7.00829L7.18017 7.00853L7.47982 7.2783Z" stroke="black" strokeOpacity="0.65" strokeWidth="0.21"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Menubar;

