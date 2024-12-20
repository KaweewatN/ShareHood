import BackButton from "@components/hood.ui/BackButton";
import RenteeTransactionDetail from "./RenteeTransactionDetail";

export default function RenteeTransactionContainer({
  userId,
  transactionId,
}: {
  userId: string;
  transactionId: string;
}) {
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center space-x-3">
        <BackButton path="/rentee/activity" />
        <p className="text-sm font-semibold">activity</p>
      </div>
      <RenteeTransactionDetail userId={userId} transactionId={transactionId} />
    </div>
  );
}
