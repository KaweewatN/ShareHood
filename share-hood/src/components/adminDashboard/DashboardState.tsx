// components/dashboard/DashboardStats.tsx
import React from "react";
import AdminDashboardCard from "./AdminDashboardCard";
import { FaUsers, FaBox, FaList, FaClock } from "react-icons/fa";

const stats = [
  { label: "Active Users", value: 420, change: "3% Up from yesterday", icon: FaUsers, changeDirection: "up" },
  { label: "Shared Items", value: 123, change: "1.5% Up from last week", icon: FaBox, changeDirection: "up" },
  { label: "Total Listing", value: 21, change: "3% Up from yesterday", icon: FaList, changeDirection: "up" },
  { label: "Total Pending", value: 45, change: "3% Up from yesterday", icon: FaClock, changeDirection: "up" },
];

const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {stats.map((stat, index) => (
        <AdminDashboardCard
          key={index}
          label={stat.label}
          value={stat.value}
          icon={stat.icon}
          change={stat.change}
          changeDirection={stat.changeDirection}
        />
      ))}
    </div>
  );
};

export default DashboardStats;