"use client";

//Hooks
import useFetchData from "@service/hooks/useFetchData";

// Types
import {WishlistType} from "../../types/apiType";

// Components
import ItemCardLong from "@components/hood.ui/ItemCardLong";
import ItemCardLongLoading from "@components/skeleton/ItemCardLongLoading";

export default function WishListContainer() {
  const {data: wishlists, isLoading} = useFetchData<WishlistType[]>({
    queryKey: "fetchWishlist",
    apiPath: "/api/wishlist/9eb3f908-a7d8-4cc8-8d3f-968a5384c5a0", // Example data
  });

  return (
    <div className="flex w-full flex-col justify-start">
      <p className="text-left text-lg font-semibold text-black">Wishlist</p>
      <div className="mt-3 flex w-full flex-col items-start justify-start space-y-3">
        {isLoading ? (
          Array.from({length: 3}).map((_, index) => <ItemCardLongLoading key={index} />)
        ) : (
          <div className="flex w-full flex-col space-y-3">
            {wishlists?.map((item: WishlistType, index: number) => (
              <ItemCardLong key={index} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
