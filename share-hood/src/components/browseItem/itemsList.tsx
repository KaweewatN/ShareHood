"use client";

import {useState, useEffect} from "react";

import {debounce} from "@service/functions/debounce";

import useFetchData from "@service/hooks/useFetchData";
import {ItemType} from "../../types/apiType";

import Icons from "@components/icons/icons";

import ItemCardDefault from "@components/hood.ui/ItemCardDefault";
import ItemCardDefaultLoading from "@components/skeleton/ItemCardDefaultLoading";
import BrowseTab from "./browseTab";
import SearchBar from "../hood.ui/SearchBar";
import Link from "next/link";

export default function ItemsList() {
  const [activeTab, setActiveTab] = useState<boolean>(false);

  const searchParams =
    typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;

  const tag = searchParams ? searchParams.get("tag") : null;
  const apiPath: string = tag ? `/api/items?tag=${tag}` : "/api/items";

  const {
    data: items,
    isLoading,
    refetch,
  } = useFetchData<ItemType[]>({
    queryKey: `items-${tag}`,
    apiPath,
  });

  const debouncedRefetch = debounce(() => {
    refetch();
  }, 15);

  useEffect(() => {
    debouncedRefetch();
  }, [apiPath, debouncedRefetch]);

  return (
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
      <div className="mt-2 grid grid-cols-2 gap-5 lg:grid-cols-3">
        {isLoading
          ? Array.from({length: 4}).map((_, index) => <ItemCardDefaultLoading key={index} />)
          : items?.map((item: ItemType, index: number) => (
              <Link key={index} href={`/item/${item.itemID}`}>
                <ItemCardDefault key={index} {...item} />
              </Link>
            ))}
      </div>
    </div>
  );
}
