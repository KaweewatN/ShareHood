" use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@components/shad.ui/dropdown-menu";
import Icons from "@components/icons/icons";

import {toast} from "sonner";
import {Button} from "@components/shad.ui/button";

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
      toast.success("Wishlist deleted successfully"); // This is not working
    },
    onError: () => {
      toast.error("Error deleting wishlist");
    },
  });
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>{Icons.VerticalDots()}</DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white">
          <DropdownMenuItem className="flex w-full justify-center p-0 text-red-500">
            <Button
              variant="ghost"
              className="p-0"
              onClick={(event) => {
                event.preventDefault();
                deleteWishlist();
                toast.success("Wishlist deleted successfully");
                window.location.reload();
              }}
            >
              {Icons.Delete()} <span className="text-neutral-900">Delete</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
