"use client";

import Link from "next/link";
import useFetchOwnerItems from "@service/hooks/query/owner/useFetchOwnerItems";
import {ItemType} from "src/types/apiType";
import OwnerItemCard from "./OwnerItemCard";
import ItemCardLongLoading from "@components/skeleton/ItemCardLongLoading";

export default function OwnerItemDisplay({userId}: {userId: string}) {
  const {data, isLoading} = useFetchOwnerItems(userId);
  if (isLoading) {
    return Array.from({length: 3}).map((_, index) => <ItemCardLongLoading key={index} />);
  }
  return (
    <div className="flex flex-col space-y-3 md:space-y-5">
      {Array.isArray(data) &&
        data?.map((item: ItemType) => (
          <Link href={`/owner/item-detail/${item?.itemID}`} key={item?.itemID}>
            <OwnerItemCard key={item?.itemID} {...item} />
          </Link>
        ))}
    </div>
  );
}
