"use client";

import {useState, useTransition} from "react";
import {useRouter} from "next/navigation";
import useFetchItemDetail from "@service/hooks/query/useFetchItemDetail";
import {ReviewType} from "src/types/apiType";
import Icons from "@components/icons/icons";
import {Button} from "@components/shad.ui/button";
import DefaultButton from "@components/hood.ui/DefaultButton";
import DeliveryCard from "./DeliveryCard";
import {Avatar, AvatarFallback, AvatarImage} from "@components/shad.ui/avatar";
import {convertToDate} from "@service/functions/convertToDate";
import {itemStatusColor} from "@service/functions/itemStatusColor";
import {incrementDuration, decrementDuration} from "@service/functions/durationCounter";
import {incrementQuantity, decrementQuantity} from "@service/functions/quantityCounter";

export default function ItemDetail({itemId}: {itemId: string}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const {data: itemDetail, isLoading, error} = useFetchItemDetail({itemId});
  const [quantity, setQuantity] = useState(1);
  const [duration, setDuration] = useState(1);

  const navigateToItemForm = () => {
    startTransition(() => {
      router.push(`/item/${itemId}/form?duration=${duration}&quantity=${quantity}`);
    });
  };

  if (isLoading) {
    return (
      <div className="flex w-full justify-center">
        <div className="loaderDot"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error loading item details</div>;
  }

  if (!itemDetail) {
    return <div>No item details found</div>;
  }

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="mt-2 h-64 w-11/12 rounded-md bg-cover bg-center md:w-10/12"
        style={{backgroundImage: `url(${itemDetail.itemImage || "/default-image.jpg"})`}}
        aria-label={itemDetail.itemName || "Item Image"}
      ></div>
      <div className="mt-5 w-full space-y-4 px-2">
        <div className="flex w-full items-center justify-between">
          <p className="text-semibold text-lg">{itemDetail.itemName}</p>
          <p className="inline-flex">
            <span className="text-defaultBlue">{itemDetail.itemPrice} THB</span>
            <span className="text-black">&nbsp;/ Day</span>
          </p>
        </div>
        <div className="flex items-center space-x-5">
          <p className="inline-flex items-baseline space-x-1">
            <span className="text-gray-500">{Icons?.Users()}</span>
            <span className="text-defaultBlue">{itemDetail.ownerName}</span>
          </p>
          <p className={`${itemStatusColor(itemDetail?.itemStatus)} flex items-center space-x-1`}>
            <span>{Icons.Info()}</span>
            <span>{itemDetail?.itemStatus}</span>
          </p>
        </div>
        <hr />
        <p className="text-sm text-gray-600">{itemDetail?.itemDescription}</p>
        <hr />

        <h3 className="text-lg font-semibold">Pickup</h3>
        {itemDetail?.pickupLocation && (
          <div className="flex space-x-3">
            <DeliveryCard price={39} />
          </div>
        )}

        <hr></hr>
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-semibold">Duration (Days) </h3>
          <p className="text-sm text-defaultBlue">Max: {itemDetail?.itemReturnDuration} Day(s)</p>
        </div>

        <div className="flex w-full items-center justify-center space-x-4">
          <Button
            onClick={() =>
              decrementDuration(Number(itemDetail?.itemReturnDuration), duration, setDuration)
            }
            className="rounded-lg border-2 px-2 py-1 text-2xl text-defaultBlue shadow-none"
          >
            -
          </Button>
          <span className="text-lg">{duration}</span>
          <Button
            onClick={() =>
              incrementDuration(Number(itemDetail?.itemReturnDuration), duration, setDuration)
            }
            className="rounded-lg border-2 px-2 py-1 text-2xl text-defaultBlue shadow-none"
          >
            +
          </Button>
        </div>

        <hr></hr>
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-semibold">Quantity </h3>
          <p className="text-sm text-defaultBlue">Remain: {itemDetail?.itemQuantity}</p>
        </div>

        <div className="flex w-full items-center justify-center space-x-4">
          <Button
            onClick={() =>
              decrementQuantity(Number(itemDetail?.itemQuantity), quantity, setQuantity)
            }
            className="rounded-lg border-2 px-2 py-1 text-2xl text-defaultBlue shadow-none"
          >
            -
          </Button>
          <span className="text-lg">{quantity}</span>
          <Button
            onClick={() =>
              incrementQuantity(Number(itemDetail?.itemQuantity), quantity, setQuantity)
            }
            className="rounded-lg border-2 px-2 py-1 text-2xl text-defaultBlue shadow-none"
          >
            +
          </Button>
        </div>

        <div className="py-4">
          <DefaultButton
            label={isPending ? "Loading..." : "Order Now"}
            onClick={navigateToItemForm}
            disabled={
              itemDetail?.itemQuantity === 0 ||
              itemDetail?.itemStatus === "Unavailable" ||
              itemDetail?.itemStatus === "Out of stock" ||
              isPending
            }
          />
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
