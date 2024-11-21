"use client";

import AdminDashboardCard from "./AdminDashboardCard";
import Icons from "@components/icons/icons";
import ActivityLog from "./ActivityLog";
import UserTableDashboard from "./UserTableDashboard";
import useFetchAdminSummary from "@service/hooks/query/useFetchAdminSummary";
import useFetchAllUsers from "@service/hooks/query/admin/useFetchAllUsers";
import useFetchUserByID from "@service/hooks/query/useFetchUserByID";
import Link from "next/link";

const analyticsData = [
  {
    label: "Active Users",
    value: "0",
    icon: "userFriends",
    growth: "3% Up from yesterday",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
    growthColor: "text-green-500",
    column: "usercount",
    path: "/admin/users",
  },
  {
    label: "Shared Items",
    value: "0",
    icon: "box",
    growth: "1.5% Up from past week",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-500",
    growthColor: "text-green-500",
    column: "itemcount",
    path: "/admin/items",
  },
  {
    label: "Total Transactions",
    value: "0",
    icon: "clock",
    growth: "3% Up from yesterday",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-500",
    growthColor: "text-green-500",
    column: "transactioncount",
    path: "/admin/transactions",
  },
  {
    label: "Total Completed",
    value: "0",
    icon: "chartLine",
    growth: "3% Up from yesterday",
    bgColor: "bg-green-100",
    iconColor: "text-green-500",
    growthColor: "text-green-500",
    column: "completedtransactioncount",
    path: "/admin/transactions-completed",
  },
];

export default function AdminDashboard({userId}: {userId: string}) {
  const {data: adminSummaryRaw, isLoading: isLoadingAdminSUmmary} = useFetchAdminSummary();
  const {data: allUsers, isLoading: isLoadingAllUsers} = useFetchAllUsers();
  const {data: adminRaw, isLoading: isLoadingAdmin} = useFetchUserByID(userId, "admin");
  const admin = Array.isArray(adminRaw) ? adminRaw[0] : null;
  const adminSummary = Array.isArray(adminSummaryRaw) ? adminSummaryRaw[0] : null;

  if (isLoadingAdminSUmmary || isLoadingAllUsers || isLoadingAdmin) {
    return (
      <div className="flex justify-center p-5">
        <div className="loaderDot"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen space-y-7">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {admin?.personalInfo.firstName}
        </h1>
      </div>
      <h2 className="mt-1 text-xl font-semibold text-gray-700">Admin Dashboard</h2>

      {/* Responsive Grid for Dashboard Cards */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-6">
        {analyticsData.map((data, index: number) => (
          <Link href={data.path} key={index}>
            <AdminDashboardCard
              key={index}
              label={data.label}
              value={adminSummary ? adminSummary[data.column] : data.value}
              icon={data.icon as keyof typeof Icons}
              bgColor={data.bgColor}
              iconColor={data.iconColor}
              growth={data.growth}
              growthColor={data.growthColor}
            />
          </Link>
        ))}
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
          <UserTableDashboard users={allUsers} />
        </div>
      </div>
    </div>
  );
}
