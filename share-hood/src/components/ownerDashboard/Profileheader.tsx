"use client";

import {Avatar, AvatarFallback, AvatarImage} from "@components/shad.ui/avatar";

export default function ProfileHeader({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-6 shadow-md">
      <div className="flex items-center">
        {/* Profile Image */}
        <Avatar className="h-3/12 w-3/12">
          <AvatarImage src="/images/Default-LINE-moon.JPG" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        {/* Text Section */}
        <div className="ml-4">
          <h2 className="text-xl font-bold text-gray-800">Welcome back, Owner!</h2>
          <h3 className="text-lg font-medium text-gray-700">
            {firstName} {lastName}
          </h3>
          <p className="text-sm text-gray-500">258 Followers • 6 Following</p>
        </div>
      </div>
    </div>
  );
}
