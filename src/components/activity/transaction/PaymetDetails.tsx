"use client";

export default function PaymetDetails({
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
      <div className="mt-2 flex flex-col space-y-3 text-sm">
        <p className="flex justify-between space-x-1">
          <span className="text-gray-500">{itemName}</span>
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
          <span className="font-semibold text-defaultBlue">{price} THB</span>
        </p>
      </div>
    </div>
  );
}
