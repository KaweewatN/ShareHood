"use client";

import Image from "next/image";
import useFetchDataCustom from "@service/hooks/useFetchDataCustom";
import {ItemType, ReviewType} from "../../types/apiType";
import Icons from "@components/icons/icons";
import BackButton from "@components/hood.ui/BackButton";
import DefaultButton from "@components/hood.ui/DefaultButton";
import PickupCard from "./PickupCard";
import DeliveryCard from "./DeliveryCard";
import {Avatar, AvatarFallback, AvatarImage} from "@components/shad.ui/avatar";
import {convertToDate} from "@service/functions/convertToDate";

export default function ItemDetail({itemId}: {itemId: string}) {
  const {
    data: itemDetail,
    isLoading,
    error,
  } = useFetchDataCustom<ItemType>({
    queryKey: "fetchItemDetail",
    apiPath: `/api/items/${itemId}`,
    gcTime: 0,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading item details</div>;
  }

  if (!itemDetail) {
    return <div>No item details found</div>;
  }

  return (
    <div className="flex w-full flex-col items-center">
      <BackButton className="absolute left-5 top-5" path="/browse" />
      <div className="mb-2 h-80 w-80">
        <Image
          src={itemDetail.itemImage || "/default-image.jpg"}
          alt={itemDetail.itemName || "Item Image"}
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div className="w-full space-y-4 px-2">
        <div className="flex w-full items-center justify-between">
          <p className="text-semibold text-lg">{itemDetail.itemName}</p>
          <p className="inline-flex">
            <span className="text-defaultBlue">{itemDetail.itemPrice} THB</span>
            <span className="text-black">&nbsp;/ Day</span>
          </p>
        </div>
        <p className="inline-flex items-baseline space-x-1">
          <span className="text-gray-500">{Icons?.Users()}</span>
          <span className="text-defaultBlue">{itemDetail.ownerName}</span>
        </p>
        <hr />
        <p className="text-sm text-gray-600">{itemDetail.itemDescription}</p>
        <hr />

        <h3 className="text-lg font-semibold">Pickup</h3>
        {itemDetail.pickupLocation && itemDetail.pickupDate && (
          <div className="flex space-x-3">
            <DeliveryCard price={39} />
            <PickupCard
              pickupLocation={itemDetail.pickupLocation || null}
              pickupDate={itemDetail.pickupDate || undefined}
            />
          </div>
        )}
        <div className="pt-3">
          <DefaultButton label="Order now" />
        </div>
        <div className="pt-2">
          <h3 className="text-lg font-semibold">Reviews</h3>
        </div>
        {itemDetail.reviews?.map((review: ReviewType, index: number) => (
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
