// components/dashboard/AdminDashboardCard.tsx
"use client";

import React from "react";
import { IconType } from "react-icons";

interface AdminDashboardCardProps {
  label: string;
  value: number;
  icon: IconType;
  change: string;
  changeDirection: "up" | "down";
}

const AdminDashboardCard: React.FC<AdminDashboardCardProps> = ({ label, value, icon: Icon, change, changeDirection }) => {
  const changeColor = changeDirection === "up" ? "text-green-500" : "text-red-500";
  const changeIcon = changeDirection === "up" ? "▲" : "▼";

  return (
    <div className="flex flex-col items-center justify-between p-4 bg-white rounded-lg shadow-md space-y-2 max-w-[150px]">
      {/* Icon and Label */}
      <div className="flex items-center space-x-2">
        <Icon className="text-2xl text-blue-500" />
        <h4 className="text-sm font-semibold text-gray-600">{label}</h4>
      </div>

      {/* Value */}
      <p className="text-3xl font-bold text-gray-900">{value}</p>

      {/* Change Indicator */}
      <div className={`flex items-center text-sm ${changeColor}`}>
        <span className="mr-1">{changeIcon}</span>
        <span>{change}</span>
      </div>
    </div>
  );
};

export default AdminDashboardCard;