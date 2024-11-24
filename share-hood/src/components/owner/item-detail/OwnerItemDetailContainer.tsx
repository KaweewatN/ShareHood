import BackButton from "@components/hood.ui/BackButton";
import OwnerItemDetail from "./OwnerItemDetail";

export default function OwnerItemDetailContainer({
  userId,
  itemId,
}: {
  userId: string;
  itemId: string;
}) {
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center">
        <BackButton path="/owner/items" />
        <h3 className="text-lg font-semibold">Your Item Details</h3>
      </div>
      <OwnerItemDetail userId={userId} itemId={itemId} />
    </div>
  );
}
