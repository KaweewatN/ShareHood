"use client";

import Icons from "@components/icons/icons";
import Image from "next/image";

import {TransactionType} from "src/types/apiType";
import {EXAMPLE_ITEM_IMAGES} from "src/constants/pageData";

export default function TransactionItemCard(trasaction: TransactionType) {
  return (
    <div className="flex w-full cursor-pointer space-x-3 rounded-lg border p-3 shadow-sm">
      <div className="relative h-24 w-28 md:h-28 md:w-32">
        <Image
          src={"itemImage" in trasaction ? trasaction.itemImage : EXAMPLE_ITEM_IMAGES}
          alt={trasaction.itemName}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <p className="text-sm font-medium">{trasaction.itemName}</p>
        <div className="flex space-x-2 text-xs">
          <p className="flex items-center space-x-1 text-defaultBlue">
            <span>{Icons.Users("text-gray-400")}</span>
            <span>{trasaction.ownerName}</span>
          </p>
          <p className="flex items-center space-x-1 text-defaultBlue">
            <span>{Icons.Tag("text-gray-400")}</span>
            <span>{trasaction.category}</span>
          </p>
        </div>
        <div className="flex flex-col text-xs text-gray-400">
          <p>Price</p>
          <p>
            <span className="text-defaultBlue">{trasaction.price} THB</span> /day
          </p>
        </div>
      </div>
    </div>
  );
}
