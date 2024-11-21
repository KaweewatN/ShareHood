" use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/shad.ui/dropdown-menu";
import Icons from "@components/icons/icons";

import useDeleteWishlist from "@service/hooks/mutation/useDeleteWishlist";

export default function DeleteWistlistDropDown({
  wishlistID,
  userID,
}: {
  wishlistID: string;
  userID: string;
}) {
  const {mutate: deleteWishlist} = useDeleteWishlist({
    userId: userID,
    wishlistId: wishlistID,
    onSuccess: () => {
      alert("Wishlist deleted successfully");
    },
    onError: () => {
      alert("Error deleting wishlist");
    },
  });
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>{Icons.VerticalDots()}</DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white">
          <DropdownMenuItem
            className="text-red-500"
            onClick={(event) => {
              event.preventDefault();
              deleteWishlist();
              window.location.reload();
            }}
          >
            {Icons.Delete()} <span className="text-neutral-900">Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
