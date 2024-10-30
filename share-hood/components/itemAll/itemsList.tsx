"use client";

import useFetchData from "@service/hooks/useFetchData";
import {ItemType} from "../../types/api/apiType";
import Icons from "@components/icons/icons";

import {Button} from "@components/shad.ui/button";

import ItemCardDefault from "@components/hood.ui/ItemCardDefault";
import ItemCardDefaultLoading from "@components/skeleton/ItemCardDefaultLoading";

export default function ItemsList() {
  const {data: items, isLoading} = useFetchData<ItemType[]>({
    queryKey: "fetchItems",
    apiPath: "/api/items",
  });

  return (
    <div>
      <div className="w-full">
        <div className="flex items-center justify-between p-3">
          <p>{items?.length} results founded</p>
          <Button className="text-gray-500" variant="link">
            <p className="text-2xl">{Icons.Filter()}</p>
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {isLoading
            ? Array.from({length: 4}).map((_, index) => <ItemCardDefaultLoading key={index} />)
            : items?.map((item: ItemType, index: number) => (
                <ItemCardDefault key={index} {...item} />
              ))}
        </div>
      </div>
    </div>
  );
}
