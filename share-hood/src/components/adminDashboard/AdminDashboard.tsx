"use client";

import {useMemo} from "react";
import AdminDashboardCard from "./AdminDashboardCard";
import Icons from "@components/icons/icons";
import ActivityLog from "./ActivityLog";
import UserTable from "./UserTable";

const analyticsData = [
  {
    label: "Active Users",
    value: "420",
    icon: "userFriends", // Key from Icons object
    growth: "3% Up from yesterday",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
    growthColor: "text-green-500",
  },
  {
    label: "Shared Items",
    value: "123",
    icon: "box", // Key from Icons object
    growth: "1.5% Up from past week",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
    growthColor: "text-green-500",
  },
  {
    label: "Total Listing",
    value: "21",
    icon: "clock", // Key from Icons object
    growth: "3% Up from yesterday",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-500",
    growthColor: "text-green-500",
  },
  {
    label: "Total Pending",
    value: "45",
    icon: "chartLine", // Key from Icons object
    growth: "3% Up from yesterday",
    bgColor: "bg-red-100",
    iconColor: "text-red-500",
    growthColor: "text-green-500",
  },
];

export default function AdminDashboard() {
  const cards = useMemo(() => {
    return analyticsData.map((data, index) => {
      return (
        <AdminDashboardCard
          key={index}
          label={data.label}
          value={data.value}
          icon={data.icon as keyof typeof Icons} // Ensure the icon key matches the Icons object
          bgColor={data.bgColor}
          iconColor={data.iconColor}
          growth={data.growth}
          growthColor={data.growthColor}
        />
      );
    });
  }, []);

  return (
    <div className="min-h-screen space-y-8 p-6 sm:p-8 lg:p-12">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, Nipun</h1>
        <h2 className="mt-1 text-xl font-semibold text-gray-700">Admin Dashboard</h2>
      </div>

      {/* Responsive Grid for Dashboard Cards */}
      <div className="grid grid-cols-2 gap-6">
        {cards.filter((card) => card !== null)} {/* Filter out invalid cards */}
      </div>

      {/* Activity Log */}
      <div className="mt-12">
        <h3 className="mb-4 text-lg font-semibold text-gray-800">Activity Log</h3>
        <div className="max-h-60 overflow-auto">
          <ActivityLog />
        </div>
      </div>

      {/* User Management */}
      <div className="mt-12">
        <h3 className="mb-4 text-lg font-semibold text-gray-800">User Management</h3>
        <div className="max-h-80 overflow-auto">
          <UserTable />
        </div>
      </div>
    </div>
  );
}
