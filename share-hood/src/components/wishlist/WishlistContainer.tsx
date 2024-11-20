"use client";

// main
import Link from "next/link";

//Hooks
import useFetchData from "@service/hooks/useFetchData";

// Types
import {WishlistType} from "../../types/apiType";

// Components
import WishlistCard from "./WishlistCard";
import ItemCardLongLoading from "@components/skeleton/ItemCardLongLoading";
import BackButton from "@components/hood.ui/BackButton";

export default function WishListContainer({userId}: {userId: string}) {
  const {data: wishlists, isLoading} = useFetchData<WishlistType[]>({
    queryKey: "fetchWishlist",
    apiPath: `/api/wishlist/${userId}`,
  });

  return (
    <div className="flex w-full flex-col justify-start">
      <div className="flex items-center justify-start space-x-3">
        <BackButton path="/home" />
        <p className="text-left text-lg font-semibold text-black">Wishlist</p>
      </div>
      <div className="mt-3 flex w-full flex-col items-start justify-start space-y-3">
        {isLoading ? (
          Array.from({length: 3}).map((_, index) => <ItemCardLongLoading key={index} />)
        ) : (
          <div className="flex w-full flex-col space-y-3">
            {(wishlists?.length ?? 0 > 0) ? (
              wishlists?.map((item: WishlistType, index: number) => (
                <Link key={index} href={`/item/${item?.item_ID}`} passHref>
                  <WishlistCard key={index} {...item} userID={userId} />
                </Link>
              ))
            ) : (
              <p className="text-center text-lg text-neutral-700">No items in wishlist</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
