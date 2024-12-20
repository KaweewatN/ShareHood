"use client";

import useFetchAllUsers from "@service/hooks/query/admin/useFetchAllUsers";

export default function UserTable() {
  const {data: users, isLoading: isLoadingAllUsers} = useFetchAllUsers();

  if (isLoadingAllUsers)
    return (
      <div className="flex justify-center p-5">
        <div className="loaderDot"></div>
      </div>
    );

  return (
    <>
      <h1 className="text-md mt-5 font-semibold text-defaultBlue">
        Count: {users ? users.length : 0}
      </h1>
      <div className="overflow-auto rounded-lg bg-white shadow-md">
        <table className="min-w-full border-collapse text-left">
          <thead className="sticky top-0 bg-gray-100">
            <tr>
              <th className="p-4 text-sm font-semibold text-gray-600">Name</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Email</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
              <th className="p-4 text-sm font-semibold text-gray-600">Role</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {Array.isArray(users) &&
              users.map((user: any, index: number) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="whitespace-nowrap p-4">
                    {user?.personalInfo.firstName} {user?.personalInfo.lastName}
                  </td>
                  <td className="whitespace-nowrap p-4">{user.email}</td>
                  <td className="whitespace-nowrap p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        user.verified === true
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {user.verified === true ? "Verified" : "Pending"}
                    </span>
                  </td>
                  <td className="${ } whitespace-nowrap p-4">{user.role}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
