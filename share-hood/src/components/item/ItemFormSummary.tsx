"use client";

import {calculateNewDateLocale} from "@service/functions/calculateNewDate";

export default function ItemFormSummary({
  duration,
  quantity,
  shippingType,
}: {
  quantity: number;
  shippingType: string;
  duration: number;
}) {
  return (
    <div className="w-11/12 rounded-lg p-5 shadow-md">
      <h3 className="-ml-1 text-lg font-semibold">Transaction info</h3>
      <div className="mt-2 flex flex-col space-y-3 text-sm">
        <p className="flex flex-col justify-between space-x-1">
          <span className="text-gray-500">Estimated Duration</span>
          <span className="font-medium text-defaultBgBlue">
            {calculateNewDateLocale(0, 2)} - {calculateNewDateLocale(duration, 2)}
          </span>
        </p>
        <p className="flex flex-col space-x-1">
          <span className="text-gray-500">Quantity</span>
          <span>{quantity}</span>
        </p>
        <p className="flex flex-col space-x-1">
          <span className="text-gray-500">Shipping type</span>
          <span>{shippingType}</span>
        </p>
      </div>
    </div>
  );
}
