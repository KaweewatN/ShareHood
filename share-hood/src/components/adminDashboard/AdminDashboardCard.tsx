"use client";

import { IconType } from "react-icons";

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
    <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-lg w-full max-w-xs">
      {/* Top Section */}
      <div className="flex items-center space-x-4">
        {/* Icon Container */}
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full ${bgColor}`}
        >
          <Icon className={`text-3xl ${iconColor}`} />
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h4 className="truncate text-base font-medium text-gray-600">
            {label}
          </h4>
          <p className="mt-1 text-3xl font-bold text-gray-900">{value}</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4">
        <p className={`text-sm font-medium ${growthColor}`}>{growth}</p>
      </div>
    </div>
  );
}