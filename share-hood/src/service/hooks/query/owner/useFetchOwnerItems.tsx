import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {fetchData} from "@service/api-service/fetchData";
import {ItemType} from "src/types/apiType";

const useFetchOwnerItems = (userId: string): UseQueryResult<ItemType> => {
  return useQuery<ItemType>({
    queryKey: ["fetchOwnerItems", userId],
    queryFn: () => fetchData<ItemType>(`/api/items/owner/${userId}`),
  });
};

export default useFetchOwnerItems;
