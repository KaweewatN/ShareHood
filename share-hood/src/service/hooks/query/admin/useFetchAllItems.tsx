import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {fetchData} from "@service/api-service/fetchData";
import {ItemType} from "src/types/apiType";

const useFetchAllItems = (): UseQueryResult<ItemType> => {
  return useQuery<ItemType>({
    queryKey: ["fetchAllItems"],
    queryFn: () => fetchData<ItemType>(`/api/items`),
  });
};

export default useFetchAllItems;
