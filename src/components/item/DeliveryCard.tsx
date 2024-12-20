interface DeliveryProps {
  price: number;
}

export default function PickupCard({price}: DeliveryProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 rounded-xl border-2 px-5 py-4 text-xs">
      <p className="text-gray-600">Delivery</p>
      <p className="font-semibold text-defaultBlue">{price.toString()}</p>
      <p className="text-gray-600">THB</p>
    </div>
  );
}
