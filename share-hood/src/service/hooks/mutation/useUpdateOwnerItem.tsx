import {useMutation} from "@tanstack/react-query";
import axios from "axios";

type useUpdateOwnerItemProps = {
  itemId: string;
  ownerId: string;
  onSuccess: () => void;
  onError: () => void;
};

const useUpdateOwnerItem = ({onSuccess, onError, itemId, ownerId}: useUpdateOwnerItemProps) => {
  return useMutation({
    mutationFn: (newData: any) =>
      axios.put(`http://localhost:3000/api/items/owner/${ownerId}/${itemId}`, newData, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    onSuccess,
    onError,
  });
};

export default useUpdateOwnerItem;
