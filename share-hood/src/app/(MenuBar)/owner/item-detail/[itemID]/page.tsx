import {getUserID} from "@service/functions/NextAuthFunction";
import {authenticateOwner} from "@service/functions/NextAuthFunction";
import {redirect} from "next/navigation";
import OwnerItemDetailContainer from "@components/owner/item-detail/OwnerItemDetailContainer";

export default async function OwnerItem({params}: {params: {itemID: string}}) {
  await authenticateOwner().catch(() => redirect("/home"));
  const userId = await getUserID();
  const {itemID} = params;
  return <OwnerItemDetailContainer userId={userId} itemId={itemID} />;
}
