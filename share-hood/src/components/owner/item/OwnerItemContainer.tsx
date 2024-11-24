import BackButton from "@components/hood.ui/BackButton";
import OwnerItemDisplay from "./OwnerItemDisplay";

export default function OwnerItemContainer({userId}: {userId: string}) {
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center">
        <BackButton path="/owner" />
        <h3 className="text-lg font-semibold">All Produce Lists</h3>
      </div>
      <OwnerItemDisplay userId={userId} />
    </div>
  );
}
