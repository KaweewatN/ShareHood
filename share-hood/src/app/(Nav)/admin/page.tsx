"use client";

import AdminDashboard from "@components/adminDashboard/AdminDashboard";

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto p-4 sm:p-6 md:p-8">
        <AdminDashboard />
      </div>
    </main>
  );
}