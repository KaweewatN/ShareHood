"use client";

import React, {useMemo} from "react";

// icons
import Icons from "@components/icons/icons";

// functions
import {convertToDate} from "@service/functions/convertToDate";

interface NotificationItemProps {
  title: string;
  message: string;
  timestamp: string;
  type: "alert" | "update" | "message"; // Define types for different colors
}

function NotificationItem({title, message, timestamp, type}: NotificationItemProps) {
  // Memoize the typeStyles object
  const typeStyles = useMemo(
    () => ({
      alert: {
        bg: "bg-yellow-100",
        text: "text-yellow-500",
        icon: Icons.Bell(),
      },
      update: {
        bg: "bg-blue-100",
        text: "text-blue-500",
        icon: Icons.Box(),
      },
      message: {
        bg: "bg-green-100",
        text: "text-green-500",
        icon: Icons.Message(),
      },
    }),
    [],
  );

  // Destructure the styles for the current type
  const {bg, text, icon} = typeStyles[type];

  return (
    <div className="flex items-start space-x-4 p-2">
      {/* Icon with dynamic color and background */}
      <div className={`flex-shrink-0 ${bg} rounded-full p-2`}>
        <div className={text}>{icon}</div>
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500">{message}</p>
      </div>

      {/* Timestamp */}
      <span className="text-xs text-gray-400">{convertToDate(timestamp)}</span>
    </div>
  );
}

export default React.memo(NotificationItem);
