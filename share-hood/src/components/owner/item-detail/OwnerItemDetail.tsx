"use client";

import Link from "next/link";
import useFetchItemDetail from "@service/hooks/query/useFetchItemDetail";
import useFetchOwnerItemTransaction from "@service/hooks/query/owner/useFetchOwnerItemTransaction";
import {ReviewType} from "src/types/apiType";
import Icons from "@components/icons/icons";
import {Avatar, AvatarFallback, AvatarImage} from "@components/shad.ui/avatar";
import {convertToDate} from "@service/functions/convertToDate";
import {itemStatusColor} from "@service/functions/itemStatusColor";
import OwnerTransactionCard from "./OwnerTransactionCard";

export default function OwnerItemDetail({userId, itemId}: {userId: string; itemId: string}) {
  const {data: itemDetail, isLoading, error} = useFetchItemDetail({itemId});
  const {
    data: transactionData,
    isLoading: isLoadingTransaction,
    error: isErrorTransaction,
  } = useFetchOwnerItemTransaction(userId, itemId);

  if (isLoading || isLoadingTransaction) {
    return (
      <div className="flex w-full justify-center">
        <div className="loaderDot"></div>
      </div>
    );
  }

  if (error || isErrorTransaction) {
    return <div>Error loading item details</div>;
  }

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="mt-2 h-64 w-full rounded-md bg-cover bg-center md:h-80"
        style={{backgroundImage: `url(${itemDetail?.itemImage || "/default-image.jpg"})`}}
        aria-label={itemDetail?.itemName || "Item Image"}
      ></div>
      <div className="mt-5 w-full space-y-4 px-2 md:space-y-6">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold md:text-xl">{itemDetail?.itemName}</p>
          <p className="inline-flex text-sm md:text-base">
            <span className="font-medium text-defaultBlue">{itemDetail?.itemPrice} THB</span>
            <span className="text-black">&nbsp;/ Day</span>
          </p>
        </div>
        <div className="flex items-center space-x-5">
          <p className="inline-flex items-baseline space-x-1 text-sm md:text-base">
            <span className="text-gray-500">{Icons?.Users()}</span>
            <span className="font-medium text-defaultBlue">{itemDetail?.ownerName}</span>
          </p>
          <p className="flex items-center space-x-1 text-sm font-medium text-gray-500 md:text-base">
            {Icons.Tag()} <span className="text-defaultBlue">{itemDetail?.category}</span>
          </p>
        </div>
        <hr />
        <p className="text-sm text-gray-600">{itemDetail?.itemDescription}</p>
        <hr />
        <div className="flex flex-col space-y-2">
          <div className="flex justify-start space-x-5">
            <p className="text-sm font-medium md:text-base">
              Quantity:{" "}
              <span className="text-defaultBlue">
                {(itemDetail?.itemQuantity ?? 0) + (transactionData?.length ?? 0)}
              </span>
            </p>
            <p className="text-sm font-medium md:text-base">
              Remaining: <span className="text-defaultBlue">{itemDetail?.itemQuantity}</span>
            </p>

            <p className={`flex items-center space-x-1 text-sm md:text-base`}>
              <span className="font-medium">Status: </span>
              <span
                className={`font-medium ${itemStatusColor(itemDetail?.itemStatus || "Available")}`}
              >
                {itemDetail?.itemStatus}
              </span>
            </p>
          </div>
          <p className="text-sm font-medium md:text-base">
            Pickup location:{" "}
            <span className="text-defaultBlue">
              {itemDetail?.pickupLocation ? itemDetail?.pickupLocation : "-"}
            </span>
          </p>
        </div>

        <hr />
        <div className="flex flex-col space-y-3">
          <h3 className="text-base font-semibold md:text-lg">
            Transaction{" "}
            <span className="text-sm text-defaultBlue">({transactionData?.length})</span>
          </h3>
          <div className="flex flex-col space-y-3 md:space-y-4">
            {(transactionData?.length ?? 0) > 0 ? (
              Array.isArray(transactionData) &&
              transactionData?.map((transaction: any, index: number) => (
                <Link
                  href={`/owner/item-detail/${itemId}/${transaction.transactionID}`}
                  key={index}
                >
                  <OwnerTransactionCard key={index} {...{transactionData: transaction}} />
                </Link>
              ))
            ) : (
              <p className="text-sm text-gray-500">No transaction yet</p>
            )}
          </div>
        </div>

        <hr />
        <div className="pt-2">
          <h3 className="text-base font-semibold md:text-lg">Reviews</h3>
        </div>
        {itemDetail?.reviews?.map((review: ReviewType, index: number) => (
          <div key={index} className="flex w-full flex-col justify-between">
            <div className="flex space-x-2">
              <div className="relative max-w-fit">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="absolute right-0 top-6 rounded-xl bg-yellow-400 px-1 py-[1px] text-xs text-white">
                  {review?.reviewRating}
                </p>
              </div>

              <div>
                <p>{review?.users?.reviewerName}</p>
                <p className="text-xs text-gray-600">{convertToDate(review?.dateCreated)}</p>
              </div>
            </div>
            <p className="mx-5 mt-2 text-sm text-gray-500">{review?.reviewComment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
