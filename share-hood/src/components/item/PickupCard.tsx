// functions
import {convertToDate} from "@service/functions/convertToDate";

interface Pickup {
  pickupLocation: string | null;
  pickupDate: string | undefined;
}

export default function PickupCard({pickupLocation, pickupDate}: Pickup) {
  return (
    <div className="flex flex-col items-center justify-center space-y-1 rounded-xl border-2 p-4 text-xs">
      <p className="text-gray-600">Self-pickup</p>
      <p className="font-semibold text-defaultBlue">{pickupLocation}</p>
      <p className="text-gray-600">{convertToDate(pickupDate)}</p>
    </div>
  );
}
