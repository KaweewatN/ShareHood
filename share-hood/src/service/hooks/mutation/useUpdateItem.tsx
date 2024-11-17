import {useMutation} from "@tanstack/react-query";
import axios from "axios";

type useUpdateItemProps = {
  itemId: string;
  onSuccess: () => void;
  onError: () => void;
};

const useUpdateItem = ({onSuccess, onError, itemId}: useUpdateItemProps) => {
  return useMutation({
    mutationFn: (newData: any) =>
      axios.put(`http://localhost:3000/api/items/${itemId}`, newData, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    onSuccess,
    onError,
  });
};

export default useUpdateItem;
