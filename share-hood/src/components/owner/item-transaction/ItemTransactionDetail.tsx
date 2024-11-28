"use client";

// main
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
//components
import TransactionItemCard from "@components/hood.ui/TransactionItemCard";
import ShippingDetailCard from "@components/activity/transaction/ShippingDetailCard";
import PaymetDetails from "@components/activity/transaction/PaymetDetails";
import Icons from "@components/icons/icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/shad.ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "src/components/shad.ui/select";
import DefaultButton from "@components/hood.ui/DefaultButton";
//hooks
import useFetchOwnerItemTransactionById from "@service/hooks/query/owner/useFetchOwnerItemTransactionById";
import useUpdateTransactionStatus from "@service/hooks/mutation/useUpdateTransactionStatus";
//functions
import {convertToDate} from "@service/functions/convertToDate";
import {TransactionStatusColor} from "@service/functions/transactionStatusColor";
// types
import {transactionZod, TransactionZodType} from "src/types/form/TransactionZod";

export default function ItemTransactionDetail({transactionId}: {transactionId: string}) {
  const {data, isLoading, isError} = useFetchOwnerItemTransactionById(transactionId);
  const dataFormatted = data && Array.isArray(data) && data[0];

  const {mutate: updateTransaction} = useUpdateTransactionStatus({
    transactionId,
    onSuccess: () => {
      alert("Transaction updated successfully");
    },
    onError: () => {
      alert("Error updating transaction:");
    },
  });

  const form = useForm<TransactionZodType>({
    resolver: zodResolver(transactionZod), // revalidate the form schema
    defaultValues: {
      transactionStatus: dataFormatted?.transactionStatus,
    },
  });

  const handleUpdateTransaction: SubmitHandler<TransactionZodType> = async (data) => {
    updateTransaction(data);
    window.location.reload();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center">
        <div className="loaderDot"></div>
      </div>
    );
  }

  if (isError) {
    return <div>Error happen!</div>;
  }

  return (
    <div className="w-full space-y-7 px-2">
      <div>
        <h3 className="text-base font-semibold">Transaction Detail</h3>
        <p className="mt-1 text-xs font-medium">
          Transaction ID: <span className="text-slate-500">{dataFormatted?.transactionID}</span>
        </p>
      </div>

      <div className="flex flex-col space-y-2">
        <p
          className={`${TransactionStatusColor(dataFormatted?.transactionStatus)} flex items-center text-base font-medium`}
        >
          {Icons.Info()}
          &nbsp;
          {dataFormatted?.transactionStatus}
        </p>
        <p className="text-sm">
          {dataFormatted.transactionStatus === "Order-Confirm" ||
          dataFormatted.transactionStatus === "Shipping"
            ? "Estimated "
            : ""}
          Arrival Date:&nbsp;
          <span className="font-semibold text-defaultBlue">
            {convertToDate(dataFormatted?.itemArrivalDate)}
          </span>
        </p>
        <p className="text-sm">
          {dataFormatted.transactionStatus === "Order-Confirm" ||
          dataFormatted.transactionStatus === "Shipping"
            ? "Estimated "
            : ""}
          Return Date:&nbsp;
          <span className="font-semibold text-yellow-500">
            {convertToDate(dataFormatted?.itemReturnDate)}
          </span>
        </p>
      </div>
      {data && Array.isArray(data) && <TransactionItemCard {...(dataFormatted ?? null)} />}

      <div className="grid grid-cols-1">
        <h3 className="-ml-1 text-left text-lg font-semibold">Shipping details</h3>
        <div className="flex w-full items-center justify-center">
          <ShippingDetailCard
            transactionDate={dataFormatted?.transactionDate}
            shippingType={dataFormatted?.shippingMethod}
            shippingLocation={dataFormatted?.shippingLocation}
          />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <h3 className="-ml-1 text-left text-lg font-semibold">Price Details</h3>
        <div className="flex w-full items-center justify-center">
          <PaymetDetails
            itemName={dataFormatted?.itemName}
            price={Number(dataFormatted?.price)}
            quantity={Number(dataFormatted?.quantity)}
            duration={dataFormatted?.duration}
          />
        </div>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleUpdateTransaction)}
          className="scrollbar-hide flex max-h-96 w-full flex-col items-center justify-start space-y-5 overflow-y-auto pt-2 shadow-none"
        >
          <FormField
            name="transactionStatus"
            control={form.control}
            render={({field}) => {
              return (
                <FormItem className="w-full">
                  <FormLabel className="text-base font-semibold">
                    Update Transaction status
                  </FormLabel>
                  <FormControl>
                    <Select
                      {...field}
                      value={field.value}
                      onValueChange={(value) => {
                        form.setValue("transactionStatus", value as "Sent to delivery");
                      }}
                      disabled={dataFormatted?.transactionStatus === "Sent to delivery"}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Transaction status" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectGroup className="cursor-pointer">
                          <SelectLabel>Category</SelectLabel>
                          <SelectItem value="Sent to delivery">Sent to delivery</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <DefaultButton
            label="Update Transaction"
            type="submit"
            disabled={dataFormatted?.transactionStatus === "Sent to delivery"}
          />
        </form>
      </Form>
    </div>
  );
}
