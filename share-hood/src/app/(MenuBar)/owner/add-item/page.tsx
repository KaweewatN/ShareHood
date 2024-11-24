import {authenticateOwner} from "src/app/api/auth/[...nextauth]/auth";
import {redirect} from "next/navigation";
import {getUserID} from "@service/functions/NextAuthFunction";
import AddItemContainer from "@components/owner/addItem/AddItemContainer";

export default async function AddItem() {
  await authenticateOwner().catch(() => redirect("/home"));
  const userId = await getUserID();
  return (
    <>
      <AddItemContainer userId={userId} />
    </>
  );
}
