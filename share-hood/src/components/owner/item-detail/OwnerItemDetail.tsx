export default function OwnerItemDetail({userId, itemId}: {userId: string; itemId: string}) {
  return (
    <div>
      {userId} {itemId}
    </div>
  );
}
