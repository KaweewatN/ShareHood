"use client";

import React from "react";
import { IconType } from "react-icons";

interface AdminDashboardCardProps {
  label: string;
  value: string;
  icon: IconType;
  bgColor: string;
  iconColor: string;
  growth: string;
  growthColor: string;
}

const AdminDashboardCard: React.FC<AdminDashboardCardProps> = ({
  label,
  value,
  icon: Icon,
  bgColor,
  iconColor,
  growth,
  growthColor,
}) => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-lg">
      <div className="flex items-center space-x-4">
        <div className={`rounded-full p-4 ${bgColor}`}>
          <Icon className={`text-2xl ${iconColor}`} />
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-600">{label}</h4>
          <p className="mt-1 text-3xl font-extrabold text-gray-900">{value}</p>
          <p className={`text-xs font-medium ${growthColor} mt-1`}>{growth}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardCard;