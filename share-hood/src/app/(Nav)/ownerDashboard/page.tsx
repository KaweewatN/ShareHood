import React from 'react';
import ProfileHeader from '@components/ownerDashboard/Profileheader';
import AccountAnalytics from '@components/ownerDashboard/AccountAnalytics';
import LatestUploadedItem from '@components/ownerDashboard/LatestUploadItem';
import LatestReview from '@components/ownerDashboard/LatestReview';

const Page: React.FC = () => {
  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <ProfileHeader />
      <AccountAnalytics />
      <LatestUploadedItem />
      <LatestReview />
    </div>
  );
};

export default Page;