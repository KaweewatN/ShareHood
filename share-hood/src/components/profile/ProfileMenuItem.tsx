"use client";

import React from "react";

interface ProfileMenuItemProps {
  label: string;
  icon: JSX.Element;
  onClick?: () => void;
}

function ProfileMenuItem({label, icon, onClick}: ProfileMenuItemProps) {
  return (
    <div
      className="flex w-full items-center justify-between rounded-lg p-4 hover:bg-gray-100"
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="mr-3 text-blue-500">{icon}</div>
        <span className="text-gray-800">{label}</span>
      </div>
      <span>&gt;</span>
    </div>
  );
}

export default ProfileMenuItem;
