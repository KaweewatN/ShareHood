"use client";

import Icons from "@components/icons/icons";
import Image from "next/image";

import {WishlistType} from "src/types/apiType";
import {EXAMPLE_ITEM_IMAGES} from "src/constants/pageData";

import DeleteWistlistDropDown from "./DeleteWistlistDropDown";

interface WishlistCardProps extends WishlistType {
  userID: string;
}

export default function WishlistCard({userID, ...item}: WishlistCardProps) {
  return (
    <div className="flex w-full cursor-pointer space-x-5 rounded-lg border p-3 shadow-sm">
      <div className="relative h-24 w-64 md:w-40">
        <Image
          src={"itemImage" in item ? item.itemImage : EXAMPLE_ITEM_IMAGES}
          alt={item.itemName}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="mt-2 flex w-full flex-col space-y-1">
        <p className="flex items-center text-[0.9rem] font-medium md:text-base">
          <span className="text-pink-600">{Icons.HeartFill()}</span>&nbsp;
          {item.itemName}
        </p>
        <div className="flex space-x-2 text-sm">
          <p className="flex items-center space-x-1 text-defaultBlue">
            <span>{Icons.Users("text-gray-400")}</span>
            <span className="md:text-sm">{item.ownerName.split(" ")[0]}</span>
          </p>
          <p className="flex items-center space-x-1 text-defaultBlue">
            <span>{Icons.Tag("text-gray-400")}</span>
            <span className="md:text-sm">{item.category}</span>
          </p>
        </div>
        <div className="flex flex-col text-sm text-gray-400">
          <p className="md:text-sm">Price</p>
          <p>
            <span className="text-defaultBlue md:text-sm">{item.itemPrice} THB</span> /day
          </p>
        </div>
      </div>
      <div className="flex w-1/12 items-start justify-end">
        <DeleteWistlistDropDown wishlistID={item?.wishListID} userID={userID} />
      </div>
    </div>
  );
}
