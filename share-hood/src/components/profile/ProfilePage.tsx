"use client";

import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileMenuItem from "./ProfileMenuItem";
import Icons from "@components/icons/icons";
import ProfilePageSkeleton from "../skeleton/ProfileLoading";
import useFetchUserByID from "@service/hooks/query/useFetchUserByID";
import {signOut} from "next-auth/react";

export function ProfilePage({userId, role}: {userId: string; role: string}) {
  const {data, isLoading} = useFetchUserByID(userId, role.toLowerCase());
  const dataFormatted = Array.isArray(data) && data.length > 0 ? data[0] : {};
  const fullName =
    Array.isArray(data) && data.length > 0
      ? `${data[0]?.personalInfo.firstName ?? ""} ${data[0]?.personalInfo.lastName ?? ""}`
      : "";

  if (isLoading) {
    return <ProfilePageSkeleton />;
  }

  return (
    <>
      <ProfileHeader name={fullName ?? ""} email={dataFormatted?.email ?? ""} />
      <div className="mt-6 flex w-full flex-col space-y-3 p-2">
        {(role === "Owner" || role === "Admin") && (
          <ProfileMenuItem label="Switch to Owner" icon={Icons.Exchange()} href="/owner/home" />
        )}
        <ProfileMenuItem label="Personal details" icon={Icons.User()} href="/profile" />
        <ProfileMenuItem label="Settings" icon={Icons.Cog()} href="/settings" />
        <ProfileMenuItem label="Payment details" icon={Icons.CreditCard()} href="/payment" />
        <ProfileMenuItem label="FAQ" icon={Icons.QuestionCircle()} href="/faq" />
        <ProfileMenuItem label="Contact Us" icon={Icons.Envelope()} href="/contact" />
        <ProfileMenuItem label="Log out" icon={Icons.Signout()} onClick={() => signOut()} />
      </div>
    </>
  );
}

export default ProfilePage;
