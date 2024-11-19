"use client";

import Link from "next/link";
// hooks
import useFetchRenteeTransaction from "@service/hooks/query/useFetchRenteeTransaction";
// components
import ActivityTabLoading from "./ActivityTabLoading";
import ActivityCardLong from "./ActivityCardLong";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@components/shad.ui/tabs";
// types
import {TransactionType} from "src/types/apiType";

export default function ActivityTab({userId}: {userId: string}) {
  const {data, isLoading, isError} = useFetchRenteeTransaction(userId);
  const onGoingData = Array.isArray(data)
    ? data.filter(
        (transaction: TransactionType) =>
          transaction.transactionStatus === "Order Confirmed" ||
          transaction.transactionStatus === "Shipping",
      )
    : [];
  const rentedData = Array.isArray(data)
    ? data.filter((transaction: TransactionType) => transaction.transactionStatus === "Rented")
    : [];
  const completedData = Array.isArray(data)
    ? data.filter((transaction: TransactionType) => transaction.transactionStatus === "Completed")
    : [];

  if (isLoading) return <ActivityTabLoading />;
  if (isError) return <div>Error happen !!</div>;

  return (
    <>
      <Tabs defaultValue="on-going" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-transparent">
          <TabsTrigger value="on-going" className="w-full text-sm">
            On Going
          </TabsTrigger>
          <TabsTrigger value="rented" className="w-full text-sm">
            Rented
          </TabsTrigger>
          <TabsTrigger value="complete" className="w-full text-sm">
            Complete
          </TabsTrigger>
        </TabsList>

        <TabsContent value="on-going" className="w-full">
          <div className="mt-5 flex flex-col space-y-3 md:space-y-5">
            {onGoingData?.map((data: TransactionType, index: number) => (
              <Link href={`/rentee/activity/${data.transactionID ?? ""}`} key={index}>
                <ActivityCardLong key={index} {...data} />
              </Link>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="rented" className="w-full">
          <div className="mt-5 flex flex-col space-y-3 md:space-y-5">
            {rentedData?.map((data: TransactionType, index: number) => (
              <Link href={`/rentee/activity/${data.transactionID ?? ""}`} key={index}>
                <ActivityCardLong key={index} {...data} />
              </Link>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="complete" className="w-full">
          <div className="mt-5 flex flex-col space-y-3 md:space-y-5">
            {completedData?.map((data: TransactionType, index: number) => (
              <Link href={`/rentee/activity/${data.transactionID ?? ""}`} key={index}>
                <ActivityCardLong key={index} {...data} />
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
