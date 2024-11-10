"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Thumbnail from 'public/images/sharehood_logo.png';

export default function Home() {
  const [path, setPath] = useState('');
  const router = useRouter();

  const handleNavigation = () => {
    if (path.trim()) {
      router.push(path.startsWith('/') ? path : `/${path}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleNavigation();
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#007AFF] text-white font-sans">
      <div className="text-center p-10 rounded-xl bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105">
        <Image
          src={Thumbnail}
          alt="ShareHood Logo"
          width={300}  
          height={300} 
          className="mx-auto drop-shadow-lg animate-bounce-smooth"
          priority
        />
        <h1 className="text-4xl font-extrabold mt-6 tracking-wide text-[#007AFF] animate-fade-in">
          Welcome to shareHood!
        </h1>
        <p className="text-lg mt-2 font-semibold tracking-wide text-white drop-shadow-md animate-fade-in-delay">
          The only app where sharing is actually caring.
        </p>
        <p className="text-sm mt-2 text-gray-200 italic">
          “Why buy it when you can borrow it?” – <span className="font-bold">Us</span>
        </p>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter page (e.g., /home)"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            onKeyDown={handleKeyDown}
            className="px-4 py-2 rounded-lg text-gray-800 w-60 border border-gray-300 focus:outline-none focus:border-[#007AFF]"
          />
        </div>
        <button
          onClick={handleNavigation}
          className="mt-4 px-6 py-2 bg-[#007AFF] text-white rounded-full font-semibold text-md hover:bg-[#005BBB] transition duration-300 ease-in-out shadow-md hover:animate-button-wiggle"
        >
          Ready, Set, Go!
        </button>
      </div>

      <style jsx>{`
        @keyframes bounceSmooth {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDelay {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes buttonWiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(2deg);
          }
          75% {
            transform: rotate(-2deg);
          }
        }

        .animate-bounce-smooth {
          animation: bounceSmooth 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fadeInDelay 1.8s ease-out forwards;
        }

        .hover\\:animate-button-wiggle:hover {
          animation: buttonWiggle 0.4s ease-in-out;
        }

        .drop-shadow-lg {
          filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.3));
        }

        .drop-shadow-md {
          filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25));
        }
      `}</style>
    </div>
  );
}