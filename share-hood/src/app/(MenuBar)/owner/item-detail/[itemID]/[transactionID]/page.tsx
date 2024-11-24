import {authenticateOwner} from "@service/functions/NextAuthFunction";
import {redirect} from "next/navigation";
import ItemTransactionContainer from "@components/owner/item-transaction/ItemTransactionContainer";
export default async function ItemTransaction({
  params,
}: {
  params: {transactionID: string; itemID: string};
}) {
  await authenticateOwner().catch(() => redirect("/home"));
  const {transactionID, itemID} = params;
  return <ItemTransactionContainer itemId={itemID} transactionId={transactionID} />;
}
