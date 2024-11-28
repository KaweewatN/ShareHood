import {authenticateOwner} from "src/app/api/auth/[...nextauth]/auth";
import {redirect} from "next/navigation";

import ProfileHeader from "@components/owner/Profileheader";
import AccountAnalytics from "@components/owner/AccountAnalytics";
import LatestUploadedItem from "@components/owner/LatestUploadItem";
import LatestReview from "@components/owner/LatestReview";

export default async function Page() {
  await authenticateOwner().catch(() => redirect("/home"));
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
