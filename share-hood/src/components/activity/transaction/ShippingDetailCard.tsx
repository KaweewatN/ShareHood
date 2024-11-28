// functions
import {convertToDate} from "@service/functions/convertToDate";
// constants
import {TRACK_NUMBER} from "src/constants/constVariable";

interface ShippingDetailCardProps {
  shippingType: string | null;
  shippingLocation: string | null;
  transactionDate: string | undefined;
}

export default function ShippingDetailCard({
  shippingType,
  shippingLocation,
  transactionDate,
}: ShippingDetailCardProps) {
  return (
    <div className="flex w-11/12 flex-col space-y-1 p-4 text-sm shadow-md">
      <div className="flex justify-between">
        <p className="text-gray-500">Placed on</p>
        <p>{convertToDate(transactionDate)}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">Track Number</p>
        <p>{TRACK_NUMBER}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">Shipping Type</p>
        <p>{shippingType}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">Shipping Location</p>
        <p>{shippingLocation}</p>
      </div>
    </div>
  );
}
