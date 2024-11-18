"use client";

import { FaExclamationCircle, FaCheckCircle } from "react-icons/fa";

const activityLogs = [
  {
    time: "10-10-2024 4:23 PM",
    message: "User flagged: Michael Black for suspicious item listing.",
    type: "alert",
  },
  {
    time: "01-09-2024 4:23 PM",
    message: "Admin Tonkla approved 5 new users.",
    type: "info",
  },
];

export default function ActivityLog() {
  return (
    <div className="overflow-hidden">
      <div className="space-y-4">
        {activityLogs.map((log, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 rounded-md p-4 shadow-sm"
          >
            {/* Icon */}
            {log.type === "alert" ? (
              <FaExclamationCircle
                className="text-xl text-red-500 flex-shrink-0"
                aria-label="Alert Icon"
              />
            ) : (
              <FaCheckCircle
                className="text-xl text-blue-500 flex-shrink-0"
                aria-label="Info Icon"
              />
            )}

            {/* Text Content */}
            <div className="flex-1">
              <p className="text-sm text-gray-500">{log.time}</p>
              <p
                className={`text-sm font-medium ${
                  log.type === "alert" ? "text-red-600" : "text-gray-700"
                }`}
              >
                {log.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}