"use client";

import {convertToDate} from "@service/functions/convertToDate";
import {Avatar, AvatarFallback, AvatarImage} from "@components/shad.ui/avatar";
import {TransactionStatusColor} from "@service/functions/transactionStatusColor";
import Icons from "@components/icons/icons";

export default function OwnerTransactionCard({transactionData}: {transactionData: any}) {
  return (
    <div className="flex cursor-pointer flex-col items-start justify-center rounded-md border-[1px] p-2 shadow-sm hover:shadow-md md:px-3">
      <div className="flex space-x-2">
        <Avatar className="h-9 w-9 flex-grow-0">
          <AvatarImage src={transactionData.renteeImage} alt="rentee-image" />
          <AvatarFallback>Rentee-image</AvatarFallback>
        </Avatar>

        <div className="flex flex-grow flex-col space-y-2">
          <div className="flex space-x-3">
            <p className="text-sm font-semibold">{transactionData?.renteeName}</p>

            <p
              className={`${TransactionStatusColor(transactionData?.transactionStatus)} flex items-center text-sm font-medium`}
            >
              {Icons?.Info()} &nbsp;{transactionData?.transactionStatus}
            </p>
          </div>

          <p className="text-xs font-medium text-gray-600 md:text-sm">
            Earning: <span className="text-defaultBlue">{transactionData?.price} THB</span>
          </p>
          <p className="text-xs font-medium text-gray-600 md:text-sm">
            Renting Duration:{" "}
            <span className="text-defaultBlue">
              {convertToDate(transactionData?.itemArrivalDate)} -{" "}
              {convertToDate(transactionData?.itemReturnDate)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
