import ActivityTab from "./ActivityTab";
import BackButton from "@components/hood.ui/BackButton";

export default function ActivityContainer({userId}: {userId: string}) {
  return (
    <div className="w-full space-y-3">
      <BackButton path="/home" />
      <ActivityTab userId={userId} />
    </div>
  );
}
