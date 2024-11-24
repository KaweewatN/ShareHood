import BackButton from "@components/hood.ui/BackButton";
import AddItemForm from "./AddItemForm";

export default function AddItemContainer({userId}: {userId: string}) {
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center">
        <BackButton path="/owner" />
        <h3 className="text-lg font-semibold">Upload your Item</h3>
      </div>
      <AddItemForm userId={userId} />
    </div>
  );
}
