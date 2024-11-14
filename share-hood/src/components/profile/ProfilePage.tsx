"use client";

import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileMenuItem from "./ProfileMenuItem";
import Icons from "@components/icons/icons";

export function ProfilePage() {
  const handleLogout = () => {
    // Implement your logout logic here
    // eslint-disable-next-line no-console
    alert("Logging out...");
  };

  return (
    <>
      <ProfileHeader />
      <div className="mt-6 flex w-full flex-col space-y-3 p-2">
        <ProfileMenuItem label="Switch to Owner" icon={Icons.Exchange()} href="/owner/home" />
        <ProfileMenuItem label="Personal details" icon={Icons.User()} href="/profile" />
        <ProfileMenuItem label="Settings" icon={Icons.Cog()} href="/settings" />
        <ProfileMenuItem label="Payment details" icon={Icons.CreditCard()} href="/payment" />
        <ProfileMenuItem label="FAQ" icon={Icons.QuestionCircle()} href="/faq" />
        <ProfileMenuItem label="Contact Us" icon={Icons.Envelope()} href="/contact" />
        <ProfileMenuItem label="Log out" icon={Icons.Signout()} onClick={handleLogout} />
      </div>
    </>
  );
}

export default ProfilePage;
