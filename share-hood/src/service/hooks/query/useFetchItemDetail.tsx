import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {fetchData} from "@service/api-service/fetchData";

import {ItemType} from "src/types/apiType";

export interface UseFetchDataProps<T> {
  data: T;
  itemId: string;
}

const useFetchItemDetail = ({
  itemId,
}: Omit<UseFetchDataProps<ItemType>, "data">): UseQueryResult<ItemType> => {
  return useQuery<ItemType>({
    queryKey: ["fetchItemDetail"],
    queryFn: async () => {
      const data = await fetchData<ItemType>(`/api/items/${itemId}`);
      return data;
    },
    refetchOnWindowFocus: true,
  });
};

export default useFetchItemDetail;
