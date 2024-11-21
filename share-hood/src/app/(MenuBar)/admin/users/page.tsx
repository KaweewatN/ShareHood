import {authenticateAdmin} from "src/app/api/auth/[...nextauth]/auth";
import UserTable from "@components/adminDashboard/UserTable";
import BackButton from "@components/hood.ui/BackButton";
import {redirect} from "next/navigation";

export default async function AdminUserPage() {
  await authenticateAdmin().catch(() => redirect("/home"));

  return (
    <main className="min-h-screen w-full">
      <div className="container mx-auto p-2 md:p-4">
        <div className="flex items-center">
          <BackButton path="/admin" />
          <h3 className="text-xl font-semibold">User Table</h3>
        </div>
        <div className="h-5/6 overflow-auto">
          <UserTable />
        </div>
      </div>
    </main>
  );
}
