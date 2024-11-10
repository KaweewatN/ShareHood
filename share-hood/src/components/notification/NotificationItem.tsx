"use client";

import React from 'react';
import { IconType } from 'react-icons'; // Import the icon library of choice (e.g., react-icons)

interface NotificationItemProps {
  icon: IconType;
  title: string;
  message: string;
  timestamp: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ icon: Icon, title, message, timestamp }) => {
  return (
    <div className="flex items-start space-x-4 p-4 border-b border-gray-200">
      <Icon className="text-yellow-500" size={24} />
      <div className="flex-1">
        <h4 className="text-sm font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
      <span className="text-xs text-gray-400">{timestamp}</span>
    </div>
  );
};

export default NotificationItem;