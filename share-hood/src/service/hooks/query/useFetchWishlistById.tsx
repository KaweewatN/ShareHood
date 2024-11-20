import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {fetchData} from "@service/api-service/fetchData";
import {TransactionType} from "src/types/apiType";

const useFetchWishlistById = (itemId: string, userId: string): UseQueryResult<TransactionType> => {
  return useQuery<TransactionType>({
    queryKey: ["fetchWIshlistById", itemId, userId],
    queryFn: () => fetchData<TransactionType>(`/api/wishlist/${userId}?itemID=${itemId}`),
  });
};

export default useFetchWishlistById;
