"use client";

import Image from "next/image";
import Icons from "@components/icons/icons";
import {ItemType} from "../../types/apiType";

import {EXAMPLE_ITEM_IMAGES} from "src/constants/pageData";

export default function ItemCardDefault(item: ItemType) {
  return (
    <div className="flex max-h-56 max-w-48 cursor-pointer flex-col justify-evenly rounded-lg border-[1px] p-3 shadow-sm md:max-h-60 md:max-w-52">
      <div className="relative min-h-24 min-w-32 md:min-h-28 md:min-w-32 lg:min-w-36">
        <Image
          src={item.itemImage ?? EXAMPLE_ITEM_IMAGES}
          alt={item.itemName}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col space-y-1 text-xs">
        <h3 className="mt-2 text-sm">{item.itemName}</h3>
        <div className="flex space-x-2">
          <p className="flex items-center space-x-1 text-defaultBlue">
            <span>{Icons.Users("text-gray-400")}</span>
            <span>{item.ownerName.split(" ")[0]}</span>
          </p>
          <p className="flex items-center space-x-1 text-defaultBlue">
            <span>{Icons.Tag("text-gray-400")}</span>
            <span>{item.category}</span>
          </p>
        </div>
        <div className="mt-2 flex flex-col text-gray-400">
          <p>Price</p>
          <p>
            <span className="text-defaultBlue">{item.itemPrice} THB</span> /day
          </p>
        </div>
      </div>
    </div>
  );
}
