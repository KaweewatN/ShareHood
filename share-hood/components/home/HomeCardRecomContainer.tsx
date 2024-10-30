"use client";

import useFetchData from "@service/hooks/useFetchData";
import {ItemType} from "../../types/api/apiType";

import ItemCardLong from "@components/hood.ui/ItemCardLong";
import ItemCardLongLoading from "@components/skeleton/ItemCardLongLoading";

export default function HomeCardRecomConatiner() {
  const {data: items, isLoading} = useFetchData<ItemType[]>({
    queryKey: "fetchItems",
    apiPath: "/api/items",
  });

  return (
    <div className="flex w-full flex-col justify-start">
      <p className="text-left font-semibold text-black">Recommended Items</p>
      <div className="mt-3 flex w-full flex-col items-start justify-start space-y-3">
        {isLoading ? (
          Array.from({length: 2}).map((_, index) => <ItemCardLongLoading key={index} />)
        ) : (
          <div className="flex w-full flex-col space-y-3">
            {items?.map((item: ItemType, index: number) => <ItemCardLong key={index} {...item} />)}
          </div>
        )}
      </div>
    </div>
  );
}
