"use client";

import dynamic from "next/dynamic";

// Dynamically import AdminDashboard for better performance if necessary
const AdminDashboard = dynamic(() => import("@components/adminDashboard/AdminDashboard"), {
  ssr: false, // Disables server-side rendering for this component if not required
});

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen p-6">
      <AdminDashboard />
    </div>
  );
}
