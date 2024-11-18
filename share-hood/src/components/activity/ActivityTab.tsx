"use client";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@components/shad.ui/tabs";
// hooks
import useFetchRenteeTransaction from "@service/hooks/query/useFetchRenteeTransaction";
// components
import ActivityTabLoading from "./ActivityTabLoading";
import ActivityCardLong from "./ActivityCardLong";
import BackButton from "@components/hood.ui/BackButton";
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
    <div>
      <BackButton className="absolute left-5 top-5" path="/home" />
      <Tabs defaultValue="on-going" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-transparent">
          <TabsTrigger value="on-going" className="w-full md:text-base">
            On Going
          </TabsTrigger>
          <TabsTrigger value="rented" className="w-full md:text-base">
            Rented
          </TabsTrigger>
          <TabsTrigger value="complete" className="w-full md:text-base">
            Complete
          </TabsTrigger>
        </TabsList>

        <TabsContent value="on-going" className="w-full">
          <div className="mt-5 flex flex-col space-y-3 md:space-y-5">
            {onGoingData?.map((data: TransactionType, index: number) => (
              <ActivityCardLong key={index} {...data} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="rented" className="w-full">
          <div className="mt-5 flex flex-col space-y-3 md:space-y-5">
            {rentedData?.map((data: TransactionType, index: number) => (
              <ActivityCardLong key={index} {...data} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="complete" className="w-full">
          <div className="mt-5 flex flex-col space-y-3 md:space-y-5">
            {completedData?.map((data: TransactionType, index: number) => (
              <ActivityCardLong key={index} {...data} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
