// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="flex items-center justify-center">
        <div className="logo-container flex flex-col items-center">
          <div className="mb-4">
            <Image src="/Logo.svg" alt="Logo" width={120} height={120} />
          </div>
          <div className="logo-text flex flex-row items-center">
            <p className="text-black font-normal text-xl font-Poppins">Little</p>
            <p className="text-purple-600 font-medium text-4xl leading-tight ml-1 font-Poppins">S</p>
            <p className="text-black font-normal text-xl font-Poppins">tockpile</p>
          </div>
        </div>
      </div>
    </main>
  );
}