"use client";

import Icons from "@components/icons/icons";

type AnalyticsItem = {
  label: string;
  value: string;
  icon: keyof typeof Icons; // Reference icons from the Icons object
  growth: string;
  growthColor: string;
  bgColor: string;
  iconColor: string;
};

const analyticsData: AnalyticsItem[] = [
  {
    label: "Active Listing",
    value: "8",
    icon: "box",
    growth: "3% Up from yesterday",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
    growthColor: "text-green-500",
  },
  {
    label: "Pending Order",
    value: "3",
    icon: "clock",
    growth: "1.5% Up from past week",
    bgColor: "bg-red-100",
    iconColor: "text-red-500",
    growthColor: "text-green-500",
  },
  {
    label: "Total Earned",
    value: "2.5K",
    icon: "chartLine",
    growth: "3% Up from yesterday",
    bgColor: "bg-green-100",
    iconColor: "text-green-500",
    growthColor: "text-green-500",
  },
  {
    label: "Total Engaged",
    value: "3.6K",
    icon: "userFriends",
    growth: "3% Up from yesterday",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-500",
    growthColor: "text-green-500",
  },
];

export default function AccountAnalytics() {
  return (
    <>
      {/* Header */}
      <div className="mb-6 flex w-full items-center justify-between px-3">
        <h3 className="text-xl font-semibold text-gray-800">Account Analytics</h3>
        <p className="text-sm text-gray-500">Last 28 days</p>
      </div>

      {/* Analytics Grid */}
      <div className="grid w-full grid-cols-1 gap-y-8 px-10 md:grid-cols-2 md:gap-x-10">
        {analyticsData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-lg bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-lg"
          >
            {/* Icon and Text Section */}
            <div className="flex items-center space-x-5">
              {/* Icon Section */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${data.bgColor}`}
                style={{
                  aspectRatio: "1/1", // Ensures a perfect square for circle
                }}
              >
                {Icons[data.icon](`text-3xl ${data.iconColor}`)}
              </div>

              {/* Text Section */}
              <div className="flex-1">
                <h4 className="truncate text-sm font-medium text-gray-600">{data.label}</h4>
                <p className="mt-1 text-3xl font-bold text-gray-900">{data.value}</p>
              </div>
            </div>

            {/* Growth Information */}
            <div className="mt-4">
              <p className={`text-sm font-medium ${data.growthColor}`}>{data.growth}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
