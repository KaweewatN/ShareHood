"use client";

export default function PriceDetails({
  price,
  duration,
  quantity,
  itemName,
}: {
  itemName: string;
  price: number;
  quantity: number;
  duration: number;
}) {
  const SERVICE_FEE = 10;
  return (
    <div className="w-11/12 rounded-lg p-5 shadow-md">
      <h3 className="-ml-1 text-lg font-semibold">Price details</h3>
      <div className="mt-2 flex flex-col space-y-3 text-sm">
        <p className="flex justify-between space-x-1">
          <span className="text-gray-500">{itemName}</span>
          <span>{price} THB</span>
        </p>
        <p className="flex justify-between space-x-1">
          <span className="text-gray-500">Quantity</span>
          <span>{quantity}</span>
        </p>
        <p className="flex justify-between space-x-1">
          <span className="text-gray-500">Duration</span>
          <span>{duration} Day(s)</span>
        </p>
        <p className="flex justify-between space-x-1">
          <span className="text-gray-500">Service fee</span>
          <span>{SERVICE_FEE} THB</span>
        </p>
        <p className="flex justify-between space-x-1">
          <span className="font-semibold">Total price</span>
          <span className="font-semibold text-defaultBlue">
            {price * duration * quantity + SERVICE_FEE} THB
          </span>
        </p>
      </div>
    </div>
  );
}
