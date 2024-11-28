"use client";

import Icons from "@components/icons/icons";

type AdminDashboardCardProps = {
  label: string;
  value: string;
  icon: keyof typeof Icons; // Use the keys of the Icons object
  bgColor: string;
  iconColor: string;
  growth: string;
  growthColor: string;
};

export default function AdminDashboardCard({
  label,
  value,
  icon,
  bgColor,
  iconColor,
  growth,
  growthColor,
}: AdminDashboardCardProps) {
  return (
    <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-lg">
      {/* Top Section */}
      <div className="flex items-center space-x-4">
        {/* Icon Container */}
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full p-3 md:h-14 md:w-14 ${bgColor}`}
        >
          {Icons[icon](`text-2xl ${iconColor}`)}
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-gray-600 md:text-base">{label}</h4>
          <p className="text-xl font-bold text-gray-900 md:text-3xl">{value}</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4">
        <p className={`text-sm font-medium ${growthColor}`}>{growth}</p>
      </div>
    </div>
  );
}
