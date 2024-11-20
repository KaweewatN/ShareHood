"use client";

import {useState, useEffect} from "react";
import BackButton from "@components/hood.ui/BackButton";
import ItemDetail from "./ItemDetail";
import Icons from "@components/icons/icons";
import useFetchWishlistById from "@service/hooks/query/useFetchWishlistById";
import useDeleteWishlist from "@service/hooks/mutation/useDeleteWishlist";
import useCreateWishlist from "@service/hooks/mutation/useCreateWishlist";
import {v4 as uuidv4} from "uuid";

export default function ItemContainer({itemId, userId}: {itemId: string; userId: string}) {
  const {data, refetch} = useFetchWishlistById(itemId, userId);
  const dataFormatted = Array.isArray(data) ? data[0] : data;

  const {mutate: createWishlist} = useCreateWishlist({
    userId: userId,
    onSuccess: () => {
      alert("Successfully added to wishlist");
    },
    onError: () => {
      alert("Error adding to wishlist");
    },
  });

  const {mutate: deleteWishlist} = useDeleteWishlist({
    userId: userId,
    wishlistId: dataFormatted ? dataFormatted.wishListID : "",
    onSuccess: () => {
      alert("Wishlist deleted successfully");
    },
    onError: () => {
      alert("Error deleting wishlist");
    },
  });
  const [isWishlist, setIsWishlist] = useState<boolean>(dataFormatted ? true : false);

  useEffect(() => {
    setIsWishlist(dataFormatted ? true : false);
  }, [dataFormatted]);

  const handleDisLike = (): void => {
    if (isWishlist) {
      deleteWishlist();
      setIsWishlist(false);
      refetch();
    }
  };

  const handleLike = (): void => {
    if (!isWishlist) {
      const wishListID = uuidv4();
      createWishlist({item_ID: itemId, userID: userId, wishListID: wishListID});
      setIsWishlist(true);
      refetch();
    }
  };

  return (
    <div className="w-full space-y-1">
      <div className="flex w-full items-center justify-between">
        <BackButton path="/browse" />
        {isWishlist ? (
          <button className="w-fit text-lg text-pink-600 md:text-xl" onClick={handleDisLike}>
            {Icons.HeartFill()}
          </button>
        ) : (
          <button className="w-fit text-lg text-gray-600 md:text-xl" onClick={handleLike}>
            {Icons.Heart()}
          </button>
        )}
      </div>
      <ItemDetail itemId={itemId} />
    </div>
  );
}
