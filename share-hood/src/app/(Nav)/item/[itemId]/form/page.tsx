import ItemFormInput from "@components/item/itemFormInput";
import {getUserID} from "src/app/api/auth/[...nextauth]/auth";

export default async function ItemForm({
  params,
}: {
  params: Promise<{itemId: string; userId: string}>;
}) {
  const {itemId} = await params;
  const userId = await getUserID();
  return (
    <>
      <ItemFormInput itemId={itemId} userId={userId} />
    </>
  );
}
