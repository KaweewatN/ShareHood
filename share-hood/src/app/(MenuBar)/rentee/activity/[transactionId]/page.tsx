import RenteeTransactionContainer from "@components/activity/transaction/RenteeTransactionContainer";
import {getUserID} from "@service/functions/NextAuthFunction";

export default async function ActivityTransactionDetail({
  params,
}: {
  params: Promise<{transactionId: string}>;
}) {
  const userId = await getUserID();
  const {transactionId} = await params;

  return (
    <>
      <RenteeTransactionContainer transactionId={transactionId} userId={userId} />
    </>
  );
}
