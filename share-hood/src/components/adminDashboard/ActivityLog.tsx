"use client";

import {FaExclamationCircle, FaCheckCircle} from "react-icons/fa";

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
    <div>
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Activity Log</h3>
      <div className="space-y-3">
        {activityLogs.map((log, index) => (
          <div key={index} className="flex items-start space-x-3">
            {log.type === "alert" ? (
              <FaExclamationCircle className="text-red-500" />
            ) : (
              <FaCheckCircle className="text-blue-500" />
            )}
            <div>
              <p className="text-sm text-gray-500">{log.time}</p>
              <p
                className={`text-sm font-medium ${log.type === "alert" ? "text-red-600" : "text-gray-700"}`}
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
