"use client";

import React from 'react';
import { IconType } from 'react-icons';

interface NotificationItemProps {
  icon: IconType;
  title: string;
  message: string;
  timestamp: string;
  type: 'alert' | 'update' | 'message'; // Define types for different colors
}

const NotificationItem: React.FC<NotificationItemProps> = ({ icon: Icon, title, message, timestamp, type }) => {
  // Determine styles based on the notification type
  const typeStyles = {
    alert: {
      bg: "bg-yellow-100",
      icon: "text-yellow-500"
    },
    update: {
      bg: "bg-blue-100",
      icon: "text-blue-500"
    },
    message: {
      bg: "bg-green-100",
      icon: "text-green-500"
    }
  };

  return (
    <div className="flex items-start space-x-4 px-4 py-2">
      {/* Icon with dynamic color and background */}
      <div className={`flex-shrink-0 ${typeStyles[type].bg} p-2 rounded-full`}>
        <Icon className={`${typeStyles[type].icon}`} size={24} />
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{message}</p>
      </div>

      {/* Timestamp */}
      <span className="text-xs text-gray-400">{timestamp}</span>
    </div>
  );
};

export default NotificationItem;