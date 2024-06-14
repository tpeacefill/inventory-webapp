// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="max-w-screen-md mx-auto px-4">
        {/* Centering and adjusting max width */}
        <div className="logo-container flex flex-col items-center">
          <div className="mb-4">
            <Image src="/Logo.svg" alt="Logo" width={120} height={120} />
          </div>
          <div className="logo-text flex items-center">
            {/* Adjusted layout for responsiveness */}
            <p className="text-black font-normal text-lg font-Poppins mr-1">Little</p>
            <p className="text-purple-600 font-medium text-4xl leading-tight font-Poppins">S</p>
            <p className="text-black font-normal text-lg font-Poppins">tockpile</p>
          </div>
        </div>
      </div>
    </main>
  );
}