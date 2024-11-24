"use client";

import Image from "next/image";
import {ItemType} from "src/types/apiType";
import {EXAMPLE_ITEM_IMAGES} from "src/constants/pageData";
import Icons from "@components/icons/icons";

export default function OwnerItemDisplay(item: ItemType) {
  return (
    <div className="shadow-base flex w-full cursor-pointer space-x-3 rounded-lg border p-3 shadow-sm hover:shadow-md md:space-x-5">
      <div className="relative h-24 w-36 md:h-28 md:w-40">
        <Image
          src={"itemImage" in item ? item.itemImage : EXAMPLE_ITEM_IMAGES}
          alt={item.itemName}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-base font-medium md:text-lg">{item.itemName}</p>
        <div className="flex space-x-2 text-xs md:space-x-4">
          <p className="flex items-center space-x-1 font-medium text-defaultBlue">
            <span>{Icons.Tag("text-gray-400")}</span>
            <span className="md:text-base">{item.category}</span>
          </p>
          <p
            className={`flex items-center space-x-1 font-medium ${item.itemStatus === "Available" ? "text-green-600" : item.itemStatus === "Out of stock" ? "text-yellow-500" : "text-red-600"}`}
          >
            <span>{Icons.Info()}</span>
            <span className="md:text-base">{item.itemStatus}</span>
          </p>
          <p className="flex items-center space-x-1 font-medium">
            <span className="md:text-base">Quantity: </span>
            <span className="text-defaultBlue md:text-base">{item.itemQuantity}</span>
          </p>
        </div>
        <div className="flex flex-col text-xs font-medium text-gray-400">
          <p className="md:text-base">Price</p>
          <p className="md:text-base">
            <span className="text-defaultBlue">{item.itemPrice} THB</span> /day
          </p>
        </div>
      </div>
    </div>
  );
}
