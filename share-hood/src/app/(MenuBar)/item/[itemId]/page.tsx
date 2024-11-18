import ItemDetail from "@components/item/ItemDetail";

export default async function Item({params}: {params: Promise<{itemId: string}>}) {
  const {itemId} = await params;
  return <ItemDetail itemId={itemId} />;
}
