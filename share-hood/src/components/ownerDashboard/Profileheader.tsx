"use client";

import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-6 shadow-md">
      <div className="flex items-center">
        {/* Profile Image */}
        <div
          className="flex items-center justify-center rounded-full border-2 border-gray-200"
          style={{
            width: "4rem", // Adjust as needed for desired size
            height: "4rem", // Ensures a perfect circle
            aspectRatio: "1 / 1", // Forces width and height equality
          }}
        >
          <Image
            src="/images/Default-LINE-moon.JPG"
            alt="Profile"
            fill
            className="object-cover rounded-full"
          />
        </div>

        {/* Text Section */}
        <div className="ml-4">
          <h2 className="text-xl font-bold text-gray-800">Welcome back, Pakarang!</h2>
          <h3 className="text-lg font-medium text-gray-700">Arocha S.</h3>
          <p className="text-sm text-gray-500">258 Followers • 6 Following</p>
        </div>
      </div>
    </div>
  );
}