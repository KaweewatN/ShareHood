import {authenticateAdmin} from "src/app/api/auth/[...nextauth]/auth";
import TransactionTable from "@components/adminDashboard/TransactionTable";
import BackButton from "@components/hood.ui/BackButton";
import {redirect} from "next/navigation";

export default async function AdminTransactionPage() {
  await authenticateAdmin().catch(() => redirect("/home"));

  return (
    <main className="min-h-screen w-full">
      <div className="container mx-auto p-2 md:p-4">
        <div className="flex items-center">
          <BackButton path="/admin" />
          <h3 className="text-xl font-semibold">Transaction Table</h3>
        </div>
        <div className="h-5/6 overflow-auto">
          <TransactionTable />
        </div>
      </div>
    </main>
  );
}
