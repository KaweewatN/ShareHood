"use client";

import ItemTransactionDetail from "./ItemTransactionDetail";
import BackButton from "@components/hood.ui/BackButton";

export default function ItemTransactionContainer({
  transactionId,
  itemId,
}: {
  transactionId: string;
  itemId: string;
}) {
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center">
        <BackButton path={`/owner/item-detail/${itemId}`} />
        <h3 className="text-lg font-semibold">Transaction Details</h3>
      </div>
      <ItemTransactionDetail transactionId={transactionId} />
    </div>
  );
}
