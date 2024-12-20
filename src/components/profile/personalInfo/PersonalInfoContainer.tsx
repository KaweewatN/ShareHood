"use client";

import PersonalDetailForm from "./PersonalInfoForm";
import BackButton from "@components/hood.ui/BackButton";

export default function PersonalInfoContainer({userId, role}: {userId: string; role: string}) {
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center">
        <BackButton path="/profile" />
        <h3 className="text-lg font-semibold">Your Personal Info</h3>
      </div>
      <PersonalDetailForm userId={userId} role={role} />
    </div>
  );
}
