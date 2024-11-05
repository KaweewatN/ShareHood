"use client";

import {useState} from "react";

import useFetchData from "@service/hooks/useFetchData";
import {ItemType} from "../../types/api/apiType";

import Icons from "@components/icons/icons";

import ItemCardDefault from "@components/hood.ui/ItemCardDefault";
import ItemCardDefaultLoading from "@components/skeleton/ItemCardDefaultLoading";
import BrowseTab from "./browseTab";
import SearchBar from "../hood.ui/SearchBar";

export default function ItemsList() {
  const searchParams = new URLSearchParams(window.location.search);

  const tag = searchParams.get("tag");
  const apiPath = tag ? `/api/items?tag=${tag}` : "/api/items";

  const {
    data: items,
    isLoading,
    refetch,
  } = useFetchData<ItemType[]>({
    queryKey: "fetchItems",
    apiPath,
  });

  const [activeTab, setActiveTab] = useState<boolean>(false);

  return (
    <div className="min-w-[22rem]">
      <div className="w-full">
        <div className="flex items-center space-x-2">
          <div className="flex-grow">
            <SearchBar />
          </div>
          <div className="flex-none">
            <button onClick={() => setActiveTab((prev) => !prev)}>
              <p className="mt-1 text-2xl text-gray-600">{Icons.Filter()}</p>
            </button>
          </div>
        </div>
        {activeTab ? <BrowseTab refetch={refetch} /> : null}
        <p className="mt-5">{items?.length} results founded</p>
        <div className="mt-2 grid grid-cols-2 gap-5">
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
