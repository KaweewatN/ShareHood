"use client";

import Image from "next/image";
import useFetchDataCustom from "@service/hooks/useFetchDataCustom";
import {ItemType} from "../../types/apiType";
import Icons from "@components/icons/icons";
import BackButton from "@components/hood.ui/BackButton";
import DefaultButton from "@components/hood.ui/DefaultButton";

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
      <div className="w-full space-y-3 px-2">
        <div className="flex w-full items-center justify-between">
          <p className="text-semibold text-lg">{itemDetail.itemName}</p>
          <p className="inline-flex">
            <span className="text-defaultBlue">{itemDetail.itemPrice} THB</span>
            <span className="text-black">&nbsp;/ Day</span>
          </p>
        </div>
        <p className="text-gray-600">{itemDetail.itemDescription}</p>
        <p className="inline-flex items-baseline space-x-1">
          <span className="text-gray-500">{Icons?.Users()}</span>
          <span className="text-defaultBlue">{itemDetail.ownerName}</span>
        </p>
        <hr />
        <p className="text-sm text-gray-600">{itemDetail.itemDescription}</p>
        <hr />
        <DefaultButton label="Order Now" />
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Reviews</h3>
        </div>
      </div>
    </div>
  );
}
