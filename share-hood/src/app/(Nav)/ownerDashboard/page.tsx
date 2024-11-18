"use client";

import ProfileHeader from "@components/ownerDashboard/Profileheader";
import AccountAnalytics from "@components/ownerDashboard/AccountAnalytics";
import LatestUploadedItem from "@components/ownerDashboard/LatestUploadItem";
import LatestReview from "@components/ownerDashboard/LatestReview";

// Page Component
export default function Page() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 p-6 sm:p-8 lg:p-12">
      <ProfileHeader />
      <AccountAnalytics />
      <LatestUploadedItem />
      <LatestReview />
    </div>
  );
}
