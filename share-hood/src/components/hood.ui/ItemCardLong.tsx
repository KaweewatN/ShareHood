"use client";

import Icons from "@components/icons/icons";
import Image from "next/image";

import {ItemType, WishlistType} from "../../types/apiType";
import {EXAMPLE_ITEM_IMAGES} from "src/constants/pageData";

export default function ItemCardLong(item: ItemType | WishlistType) {
  return (
    <div className="flex w-full cursor-pointer space-x-3 rounded-lg border p-3 shadow-sm hover:shadow-md">
      <div className="relative h-24 w-28 md:h-28 md:w-32">
        <Image
          src={"itemImage" in item ? item.itemImage : EXAMPLE_ITEM_IMAGES}
          alt={item.itemName}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-sm font-medium md:text-base">{item.itemName}</p>
        <div className="flex space-x-2 text-xs">
          <p className="flex items-center space-x-1 text-defaultBlue">
            <span>{Icons.Users("text-gray-400")}</span>
            <span className="md:text-sm">{item.ownerName.split(" ")[0]}</span>
          </p>
          <p className="flex items-center space-x-1 text-defaultBlue">
            <span>{Icons.Tag("text-gray-400")}</span>
            <span className="md:text-sm">{item.category}</span>
          </p>
        </div>
        <div className="flex flex-col text-xs text-gray-400">
          <p className="md:text-sm">Price</p>
          <p>
            <span className="text-defaultBlue md:text-sm">{item.itemPrice} THB</span> /day
          </p>
        </div>
      </div>
    </div>
  );
}
