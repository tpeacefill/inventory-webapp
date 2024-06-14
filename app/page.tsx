'use client'
import { useEffect, useState } from 'react';

const Home = () => {
  const [showLittleAndS, setShowLittleAndS] = useState(false);
  const [showStockpile, setShowStockpile] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowLittleAndS(true), 1000);
    setTimeout(() => setShowStockpile(true), 2000); // Adjust duration to match typing effect
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black animate-fadeIn">
      <div className="max-w-screen-md mx-auto px-4">
        <div className="logo-container flex flex-col items-center">
          <div className="mb-4 animate-fadeIn">
            <img src="/Logo.svg" alt="Logo" width={120} height={120} />
          </div>
          <div className="logo-text flex items-center">
            {showLittleAndS && (
              <>
                <p className="text-black font-normal text-lg font-Poppins mr-2 animate-fadeIn">
                  Little
                </p>
                <p className="text-purple-600 font-medium text-4xl leading-tight font-Poppins animate-fadeIn">
                  S
                </p>
              </>
            )}
            {showStockpile && (
              <p className="text-black font-normal text-lg font-Poppins animate-typing overflow-hidden">
                tockpile
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;