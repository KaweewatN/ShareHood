"use client";

import React from "react";
import AdminDashboardCard from "./AdminDashboardCard";
import ActivityLog from "./ActivityLog";
import UserTable from "./UserTable";
import { FaBox, FaClock, FaChartLine, FaUserFriends } from "react-icons/fa";

const analyticsData = [
  {
    label: "Active Users",
    value: "420",
    icon: FaUserFriends,
    growth: "3% Up from yesterday",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
    growthColor: "text-green-500",
  },
  {
    label: "Shared Items",
    value: "123",
    icon: FaBox,
    growth: "1.5% Up from past week",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
    growthColor: "text-green-500",
  },
  {
    label: "Total Listing",
    value: "21",
    icon: FaClock,
    growth: "3% Up from yesterday",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-500",
    growthColor: "text-green-500",
  },
  {
    label: "Total Pending",
    value: "45",
    icon: FaChartLine,
    growth: "3% Up from yesterday",
    bgColor: "bg-red-100",
    iconColor: "text-red-500",
    growthColor: "text-green-500",
  },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Nipun</h1>
        <h2 className="text-xl font-semibold text-gray-700">Admin Dashboard</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {analyticsData.map((data, index) => (
          <AdminDashboardCard
            key={index}
            label={data.label}
            value={data.value}
            icon={data.icon}
            bgColor={data.bgColor}
            iconColor={data.iconColor}
            growth={data.growth}
            growthColor={data.growthColor}
          />
        ))}
      </div>

      <ActivityLog />
      <UserTable />
    </div>
  );
};

export default AdminDashboard;