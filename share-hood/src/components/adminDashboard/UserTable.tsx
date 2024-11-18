"use client";

const users = [
  {name: "Nipun K.", email: "nipunk0258@gmail.com", status: "Verified", lastLogin: "2 hours ago"},
  {name: "Nunthaphak B.", email: "nichab@gmail.com", status: "Pending", lastLogin: "3 hours ago"},
  {name: "Phonchana M.", email: "pchmt@gmail.com", status: "Rejected", lastLogin: "3 hours ago"},
];
export default function UserTable() {
  return (
    <div className="overflow-auto rounded-lg bg-white shadow-md">
      <table className="min-w-full border-collapse text-left">
        <thead className="sticky top-0 bg-gray-100">
          <tr>
            <th className="p-4 text-sm font-semibold text-gray-600">Name</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Email</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Last Login</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {users.map((user, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="whitespace-nowrap p-4">{user.name}</td>
              <td className="whitespace-nowrap p-4">{user.email}</td>
              <td className="whitespace-nowrap p-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    user.status === "Verified"
                      ? "bg-green-100 text-green-600"
                      : user.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="whitespace-nowrap p-4">{user.lastLogin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
