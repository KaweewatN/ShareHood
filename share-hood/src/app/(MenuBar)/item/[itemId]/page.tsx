import ItemContainer from "@components/item/ItemContainer";
import {getUserID} from "@service/functions/NextAuthFunction";

export default async function Item({params}: {params: Promise<{itemId: string}>}) {
  const {itemId} = await params;
  const userId = await getUserID();
  return <ItemContainer itemId={itemId} userId={userId} />;
}
