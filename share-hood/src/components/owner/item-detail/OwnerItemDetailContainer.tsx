import BackButton from "@components/hood.ui/BackButton";
import {Button} from "@components/shad.ui/button";
import Icons from "@components/icons/icons";
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
      <div className="flex justify-between">
        <div className="flex items-center">
          <BackButton path="/owner/items" />
          <h3 className="text-lg font-semibold">Your Item Details</h3>
        </div>
        <Button className="px-2 py-0" variant="ghost">
          <small className="text-xs text-defaultBlue">{Icons.Pencil()}</small>
        </Button>
      </div>
      <OwnerItemDetail userId={userId} itemId={itemId} />
    </div>
  );
}
