import {useMutation} from "@tanstack/react-query";
import axios from "axios";

type useMutationCreateTransactionProps = {
  userId: string;
  wishlistId: string;
  onSuccess: () => void;
  onError: () => void;
};

const useDeleteWishlist = ({
  userId,
  wishlistId,
  onSuccess,
  onError,
}: useMutationCreateTransactionProps) => {
  return useMutation({
    mutationFn: () => axios.delete(`/api/wishlist/${userId}?wishlistID=${wishlistId}`),
    onSuccess,
    onError,
  });
};

export default useDeleteWishlist;
