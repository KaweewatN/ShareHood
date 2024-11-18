"use client";

import { useMemo } from "react";
import AdminDashboardCard from "./AdminDashboardCard";
import { FaBox, FaClock, FaChartLine, FaUserFriends } from "react-icons/fa";
import ActivityLog from "./ActivityLog";
import UserTable from "./UserTable";

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

export default function AdminDashboard() {
  const cards = useMemo(
    () =>
      analyticsData.map((data, index) => (
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
      )),
    []
  );

  return (
    <div className="min-h-screen space-y-8">
      {/* Header Section */}
      <div className="p-4">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Nipun</h1>
        <h2 className="text-xl font-semibold text-gray-700 mt-1">Admin Dashboard</h2>
      </div>

      {/* Responsive Grid for Dashboard Cards */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-2 overflow-auto">
        {cards}
      </div>

      {/* Activity Log */}
      <div className="mt-12 p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Activity Log</h3>
        <div className="overflow-x-auto max-h-60">
          <ActivityLog />
        </div>
      </div>

      {/* User Management */}
      <div className="mt-12 p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">User Management</h3>
        <div className="overflow-x-auto max-h-80">
          <UserTable />
        </div>
      </div>
    </div>
  );
}