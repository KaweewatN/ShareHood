"use client";

import {IconType} from "react-icons";

type AdminDashboardCardProps = {
  label: string;
  value: string;
  icon: IconType;
  bgColor: string;
  iconColor: string;
  growth: string;
  growthColor: string;
};

export default function AdminDashboardCard({
  label,
  value,
  icon: Icon,
  bgColor,
  iconColor,
  growth,
  growthColor,
}: AdminDashboardCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-lg border bg-white p-4 shadow-md transition-shadow duration-200 hover:shadow-lg">
      {/* Top Section */}
      <div className="flex items-center space-x-4">
        {/* Icon Container */}
        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${bgColor}`}>
          <Icon className={`text-2xl ${iconColor}`} />
        </div>
        {/* Text Section */}
        <div className="flex-1">
          <h4 className="truncate whitespace-nowrap text-sm font-medium text-gray-600">{label}</h4>
          <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4">
        <p className={`text-sm font-medium ${growthColor} whitespace-nowrap`}>{growth}</p>
      </div>
    </div>
  );
}
