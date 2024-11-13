"use client";

import React from "react";

const ProfileHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <h2 className="text-2xl font-bold">Welcome back, Pakarang</h2>
        <div className="mt-2 flex items-center space-x-4">
          <img
            src="/images/Default-LINE-moon.JPG"
            alt="Profile"
            className="h-16 w-16 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">Arocha S.</h3>
            <p className="text-sm text-gray-500">258 Followers • 6 Following</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="rounded-full bg-gray-100 p-2">🔔</button>
        <button className="rounded-full bg-gray-100 p-2">💬</button>
      </div>
    </div>
  );
};

export default ProfileHeader;
