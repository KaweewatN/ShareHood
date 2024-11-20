import ProfileHeader from "@components/ownerDashboard/Profileheader";
import AccountAnalytics from "@components/ownerDashboard/AccountAnalytics";
import LatestUploadedItem from "@components/ownerDashboard/LatestUploadItem";
import LatestReview from "@components/ownerDashboard/LatestReview";

// Page Component
export default function Page() {
  return (
    <div className="mx-auto mt-5 flex flex-col items-center space-y-8">
      <div className="px-5">
        <ProfileHeader firstName="Arocha" lastName="lalala" />
      </div>
      <AccountAnalytics />
      <LatestUploadedItem />
      <LatestReview />
    </div>
  );
}
