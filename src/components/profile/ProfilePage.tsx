"use client";

import React from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileMenuItem from "./ProfileMenuItem";
import Icons from "@components/icons/icons";
import ProfilePageSkeleton from "../skeleton/ProfileLoading";
import useFetchUserByID from "@service/hooks/query/useFetchUserByID";
import {signOut} from "next-auth/react";
import {useRouter} from "next/navigation";

export function ProfilePage({userId, role}: {userId: string; role: string}) {
  const router = useRouter();
  const {data, isLoading} = useFetchUserByID(userId, role.toLowerCase());
  const dataFormatted = Array.isArray(data) && data.length > 0 ? data[0] : {};
  const fullName =
    Array.isArray(data) && data.length > 0
      ? `${data[0]?.personalInfo.firstName ?? ""} ${data[0]?.personalInfo.lastName ?? ""}`
      : "";

  if (isLoading) {
    return <ProfilePageSkeleton />;
  }

  const handleLocalStorage = (): void => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("role") === "owner" || localStorage.getItem("role") === "admin") {
        localStorage.setItem("role", "rentee");
        router.push("/home");
      } else if (localStorage.getItem("role") === "rentee") {
        localStorage.setItem("role", role.toLowerCase());
        router.push(`/${role.toLowerCase()}`);
      } else {
        localStorage.setItem("role", "rentee");
        router.push("/home");
      }
    }
  };

  const handleSwitchRole = (): string => {
    if ((role === "Owner" || role === "Admin") && localStorage.getItem("role") !== "rentee") {
      return "Switch to Rentee";
    } else {
      return `Switch to ${role}`;
    }
  };

  return (
    <>
      <ProfileHeader name={fullName ?? ""} email={dataFormatted?.email ?? ""} />
      <div className="mt-6 flex w-full flex-col space-y-3 p-2">
        {(role === "Owner" || role === "Admin") && (
          <ProfileMenuItem
            label={handleSwitchRole()}
            icon={Icons.Exchange()}
            onClick={() => handleLocalStorage()}
          />
        )}
        <ProfileMenuItem
          label="Personal details"
          icon={Icons.User()}
          onClick={() => router.push("/profile/personalInfo")}
        />
        <ProfileMenuItem
          label="Settings"
          icon={Icons.Cog()}
          onClick={() => router.push("/profile/settings")}
        />
        <ProfileMenuItem
          label="Payment details"
          icon={Icons.CreditCard()}
          onClick={() => router.push("/profile/payment")}
        />
        <ProfileMenuItem
          label="FAQ"
          icon={Icons.QuestionCircle()}
          onClick={() => router.push("/profile/faq")}
        />
        <ProfileMenuItem
          label="Contact Us"
          icon={Icons.Envelope()}
          onClick={() => router.push("/profile/contact")}
        />
        <ProfileMenuItem
          label="Log out"
          icon={Icons.Signout()}
          onClick={() => {
            localStorage.removeItem("role");
            signOut();
          }}
        />
      </div>
    </>
  );
}

export default ProfilePage;
