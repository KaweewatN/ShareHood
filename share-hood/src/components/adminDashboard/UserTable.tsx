"use client";

const users = [
  {name: "Nipun K.", email: "nip...@gmail.com", status: "Verified", lastLogin: "2 hours ago"},
  {name: "Nunthaphak B.", email: "nich...@gmail.com", status: "Pending", lastLogin: "3 hours ago"},
  {name: "Phonchana M.", email: "chan...@gmail.com", status: "Rejected", lastLogin: "3 hours ago"},
];

export default function UserTable() {
  return (
    <div className="overflow-x-auto rounded-lg bg-white shadow-md">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="whitespace-nowrap p-4 text-sm font-semibold text-gray-600">Name</th>
            <th className="whitespace-nowrap p-4 text-sm font-semibold text-gray-600">Email</th>
            <th className="whitespace-nowrap p-4 text-sm font-semibold text-gray-600">Status</th>
            <th className="whitespace-nowrap p-4 text-sm font-semibold text-gray-600">
              Last Login
            </th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {users.map((user, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              {/* Name Column */}
              <td className="whitespace-nowrap p-4">{user.name}</td>

              {/* Email Column */}
              <td className="truncate whitespace-nowrap p-4">{user.email}</td>

              {/* Status Column */}
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

              {/* Last Login Column */}
              <td className="whitespace-nowrap p-4">{user.lastLogin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
