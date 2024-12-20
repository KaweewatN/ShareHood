import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {ItemType} from "src/types/apiType";

type useCreateItemProps = {
  onSuccess: () => void;
  onError: () => void;
};

const useCreateItem = ({onSuccess, onError}: useCreateItemProps) => {
  return useMutation({
    mutationFn: (ItemData: ItemType) => axios.post(`/api/items`, ItemData),
    onSuccess,
    onError,
  });
};

export default useCreateItem;
