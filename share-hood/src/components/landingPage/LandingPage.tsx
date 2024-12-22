"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import Thumbnail from "public/logo/sharehood_logo.png";

export default function LandingPage() {
  const [path, setPath] = useState("");
  const router = useRouter();

  const handleNavigation = () => {
    if (path.trim()) {
      router.push(path.startsWith("/") ? path : `/${path}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleNavigation();
    }
  };
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-white to-[#007AFF] font-sans text-white">
      <div className="transform rounded-xl bg-white bg-opacity-20 p-10 text-center shadow-2xl backdrop-blur-lg transition-transform duration-300 ease-in-out hover:scale-105">
        <Image
          src={Thumbnail}
          alt="ShareHood Logo"
          width={300}
          height={300}
          className="animate-bounce-smooth mx-auto drop-shadow-lg"
          priority
        />
        <h1 className="animate-fade-in mt-6 text-4xl font-extrabold tracking-wide text-[#007AFF]">
          Welcome to shareHood!
        </h1>
        <p className="animate-fade-in-delay mt-2 text-lg font-semibold tracking-wide text-white drop-shadow-md">
          The only app where sharing is actually caring.
        </p>
        <p className="mt-2 text-sm italic text-gray-200">
          “Why buy it when you can borrow it?” – <span className="font-bold">Us</span>
        </p>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter page (e.g., /home)"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-60 rounded-lg border border-gray-300 px-4 py-2 text-gray-800 focus:border-[#007AFF] focus:outline-none"
          />
        </div>
        <button
          onClick={handleNavigation}
          className="text-md hover:animate-button-wiggle mt-4 rounded-full bg-[#007AFF] px-6 py-2 font-semibold text-white shadow-md transition duration-300 ease-in-out hover:bg-[#005BBB]"
        >
          Ready, Set, Go!
        </button>
      </div>
    </div>
  );
}
