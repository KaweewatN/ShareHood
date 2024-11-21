import AdminDashboard from "@components/adminDashboard/AdminDashboard";
import {authenticateAdmin} from "src/app/api/auth/[...nextauth]/auth";
import {redirect} from "next/navigation";

export default async function AdminDashboardPage() {
  await authenticateAdmin().catch(() => redirect("/home"));
  return (
    <main className="min-h-screen w-full">
      <div className="container mx-auto p-2 md:p-4">
        <AdminDashboard />
      </div>
    </main>
  );
}
