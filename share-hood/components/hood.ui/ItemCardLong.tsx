"use client";

import Icons from "@components/icons/icons";
import Image from "next/image";

import {ItemType, WishlistType} from "../../types/api/apiType";

export default function ItemCardLong(item: ItemType | WishlistType) {
  return (
    <div className="flex w-full cursor-pointer space-x-3 rounded-lg border p-3 shadow-sm">
      <Image
        src="/images/example-items.jpg"
        alt="items-image"
        width={150}
        height={150}
        className="rounded-lg"
      />
      <div className="flex flex-col space-y-2">
        <p className="text-sm font-medium">{item.itemName}</p>
        <div className="flex space-x-2 text-xs">
          <p className="flex items-center space-x-1 text-defaultBlue">
            <span>{Icons.Users("text-gray-400")}</span>
            <span>{item.ownerName}</span>
          </p>
          <p className="flex items-center space-x-1 text-defaultBlue">
            <span>{Icons.Tag("text-gray-400")}</span>
            <span>{item.category}</span>
          </p>
        </div>
        <div className="flex flex-col text-xs text-gray-400">
          <p>Price</p>
          <p>
            <span className="text-defaultBlue">{item.itemPrice} THB</span> /day
          </p>
        </div>
      </div>
    </div>
  );
}
