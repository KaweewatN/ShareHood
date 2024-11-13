"use client";

import React from "react";
import {FaBox, FaClock, FaChartLine, FaUserFriends} from "react-icons/fa";

const analyticsData = [
  {
    label: "Active Listing",
    value: "8",
    icon: FaBox,
    growth: "3% Up from yesterday",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
    growthColor: "text-green-500",
  },
  {
    label: "Pending Order",
    value: "3",
    icon: FaClock,
    growth: "1.5% Up from past week",
    bgColor: "bg-red-100",
    iconColor: "text-red-500",
    growthColor: "text-green-500",
  },
  {
    label: "Total Earned",
    value: "2.5K",
    icon: FaChartLine,
    growth: "3% Up from yesterday",
    bgColor: "bg-green-100",
    iconColor: "text-green-500",
    growthColor: "text-green-500",
  },
  {
    label: "Total Engaged",
    value: "3.6K",
    icon: FaUserFriends,
    growth: "3% Up from yesterday",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-500",
    growthColor: "text-green-500",
  },
];

const AccountAnalytics: React.FC = () => {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-800">Account Analytics</h3>
        <p className="text-sm text-gray-500">Last 28 days</p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {analyticsData.map((data, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-4 shadow-lg transition-shadow duration-200 hover:shadow-xl"
          >
            <div className="flex items-center">
              {/* Icon with background color */}
              <div className={`rounded-full p-3 ${data.bgColor}`}>
                <data.icon className={`text-2xl ${data.iconColor}`} />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-600">{data.label}</h4>
                <p className="mt-1 text-2xl font-bold text-gray-900">{data.value}</p>
                <p className={`text-xs ${data.growthColor} mt-1 font-medium`}>{data.growth}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountAnalytics;
