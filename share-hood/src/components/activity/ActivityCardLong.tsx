"use client";

import Icons from "@components/icons/icons";
import Image from "next/image";
import {convertToDate} from "@service/functions/convertToDate";
import {EXAMPLE_ITEM_IMAGES} from "src/constants/pageData";
import {TransactionType} from "src/types/apiType";
import {TransactionStatusColor} from "@service/functions/transactionStatusColor";

export default function ActivityCardLong(transaction: TransactionType) {
  return (
    <div className="flex w-full cursor-pointer space-x-3 rounded-lg border p-3 shadow-sm">
      <div className="relative h-24 w-48 md:h-28 md:w-52">
        <Image
          src={"itemImage" in transaction ? transaction.itemImage : EXAMPLE_ITEM_IMAGES}
          alt={transaction?.itemName}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex w-full flex-col space-y-2">
        <div className="flex w-full items-center justify-between">
          <p className="text-xs text-gray-500 md:text-sm">
            {convertToDate(transaction?.transactionDate)}
          </p>
          <p className="text-sm font-semibold text-defaultBlue md:text-base">
            {transaction?.price} THB
          </p>
        </div>
        <p className="text-sm font-medium md:text-base">{transaction?.itemName}</p>
        <div className="flex space-x-2 text-xs">
          <p className="flex items-center space-x-1 text-defaultBlue">
            <span>{Icons.Users("text-gray-400")}</span>
            <span className="md:text-base">{transaction?.ownerName}</span>
          </p>
          <p className="flex items-center space-x-1 text-defaultBlue">
            <span>{Icons.Tag("text-gray-400")}</span>
            <span className="md:text-base">{transaction?.category}</span>
          </p>
        </div>
        <p
          className={`${TransactionStatusColor(transaction?.transactionStatus)} flex items-center text-xs font-medium md:text-sm`}
        >
          {Icons.Info()}
          &nbsp;
          {transaction?.transactionStatus}
        </p>
      </div>
    </div>
  );
}
