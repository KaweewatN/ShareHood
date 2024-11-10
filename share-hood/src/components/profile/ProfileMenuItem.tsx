"use client";

import React from "react";
import {IconType} from "react-icons"; // Optional for icons if you’re using react-icons or similar

interface ProfileMenuItemProps {
  label: string;
  icon: IconType;
  onClick?: () => void;
}

const ProfileMenuItem: React.FC<ProfileMenuItemProps> = ({label, icon: Icon, onClick}) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between rounded-lg p-4 hover:bg-gray-100"
    >
      <div className="flex items-center">
        <Icon className="mr-3 text-blue-500" size={24} />
        <span className="text-gray-800">{label}</span>
      </div>
      <span>&gt;</span>
    </button>
  );
};

export default ProfileMenuItem;
