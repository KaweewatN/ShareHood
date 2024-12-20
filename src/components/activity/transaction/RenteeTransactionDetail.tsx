"use client";

//components
import TransactionItemCard from "@components/hood.ui/TransactionItemCard";
import ShippingDetailCard from "./ShippingDetailCard";
import PaymetDetails from "./PaymetDetails";
import Icons from "@components/icons/icons";
//hooks
import useFetchRenteeTransactionById from "@service/hooks/query/useFetchRenteeTransactionById";
//functions
import {convertToDate} from "@service/functions/convertToDate";
import {TransactionStatusColor} from "@service/functions/transactionStatusColor";
import {transactionStatusMessage} from "@service/functions/transactionStatusWord";

export default function RenteeTransactionDetail({
  userId,
  transactionId,
}: {
  userId: string;
  transactionId: string;
}) {
  const {data, isLoading, isError} = useFetchRenteeTransactionById(userId, transactionId);
  const dataFormatted = data && Array.isArray(data) && data[0];

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
      <div className="ite space-items-start flex flex-col">
        <p
          className={`${TransactionStatusColor(dataFormatted?.transactionStatus)} flex items-center text-base font-medium`}
        >
          {Icons.Info()}
          &nbsp;
          {dataFormatted?.transactionStatus}
        </p>
        <p className="fonr-medium text-sm text-gray-600">
          {transactionStatusMessage(dataFormatted?.transactionStatus)}
        </p>
      </div>
      <div className="flex flex-col space-y-2">
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
    </div>
  );
}
