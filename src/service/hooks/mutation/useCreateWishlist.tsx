import {useMutation} from "@tanstack/react-query";
import axios from "axios";

type useCreateWishlistProps = {
  userId: string;
  onSuccess: () => void;
  onError: () => void;
};

const useCreateWishlist = ({onSuccess, onError, userId}: useCreateWishlistProps) => {
  return useMutation({
    mutationFn: (wishlist: any) =>
      axios.post(`http://localhost:3000/api/wishlist/${userId}`, wishlist),
    onSuccess,
    onError,
  });
};

export default useCreateWishlist;
