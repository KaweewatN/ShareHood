import {authenticateOwner} from "@service/functions/NextAuthFunction";
import {redirect} from "next/navigation";
import OwnerItemContainer from "@components/owner/item/OwnerItemContainer";
import {getUserID} from "@service/functions/NextAuthFunction";

export default async function OwnerItem() {
  await authenticateOwner().catch(() => {
    redirect("/home");
  });
  const userId = await getUserID();
  return <OwnerItemContainer userId={userId} />;
}
