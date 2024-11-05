"use client";

import Image from "next/image";
import Icons from "@components/icons/icons";
import {ItemType} from "../../types/api/apiType";

export default function ItemCardDefault(item: ItemType) {
  return (
    <div className="flex max-h-56 max-w-48 cursor-pointer flex-col justify-evenly rounded-lg border-[1px] p-3 shadow-sm">
      <div className="flex object-cover">
        <Image
          src={"/images/example-items.jpg"}
          alt={item.itemName}
          width={200}
          height={200}
          className="rounded-md"
        />
      </div>
      <h3 className="mt-2 text-sm">{item.itemName}</h3>
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
      <div className="mt-2 flex flex-col text-xs text-gray-400">
        <p className="text-xs">Price</p>
        <p>
          <span className="text-defaultBlue">{item.itemPrice} THB</span> /day
        </p>
      </div>
    </div>
  );
}
