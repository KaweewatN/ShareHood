"use client";

import useFetchItems from "@service/hooks/home/useFetchData";
import {ItemType} from "../../types/api/apiType";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemCardDefault from "@components/hood.ui/ItemCardDefault";
import ItemCardDefaultLoading from "@components/skeleton/ItemCardDefaultLoading";

export default function HomeCardContainer() {
  const {data: items = [], isLoading} = useFetchItems<ItemType[]>({
    queryKey: "fetchItems",
    apiPath: "/api/items",
  });

  return (
    <div className="w-full">
      <p className="text-left font-semibold text-black">Popular Items</p>
      {isLoading ? (
        <div className="mt-3 flex w-full space-x-3 overflow-x-auto overflow-y-hidden">
          {Array.from({length: 3}).map((_, index) => (
            <ItemCardDefaultLoading key={index} />
          ))}
        </div>
      ) : (
        <div className="mt-3 flex w-full space-x-3 overflow-x-auto overflow-y-hidden">
          {items?.map((item: ItemType, index: number) => <ItemCardDefault key={index} {...item} />)}
        </div>
      )}
    </div>
  );
}