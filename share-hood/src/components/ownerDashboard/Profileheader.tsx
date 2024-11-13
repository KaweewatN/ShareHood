"use client";

import React from "react";
import Image from "next/image";

const ProfileHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-6 shadow-md">
      <div className="flex items-center">
        {/* Profile Image Wrapper */}
        <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-gray-200">
          <Image
            src="/images/Default-LINE-moon.JPG" // Ensure this path is correct
            alt="Profile"
            width={64}
            height={64}
            className="object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="ml-4">
          <h2 className="text-xl font-bold text-gray-800">Welcome back, Pakarang!</h2>
          <h3 className="text-lg font-medium text-gray-700">Arocha S.</h3>
          <p className="text-sm text-gray-500">258 Followers • 6 Following</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
