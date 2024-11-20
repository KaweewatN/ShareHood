import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {fetchData} from "@service/api-service/fetchData";
import {TransactionType} from "src/types/apiType";

const useFetchRenteeTransaction = (userId: string): UseQueryResult<TransactionType> => {
  return useQuery<TransactionType>({
    queryKey: ["fetchRenteeTransaction", userId],
    queryFn: () => fetchData<TransactionType>(`/api/transaction/${userId}`),
  });
};

export default useFetchRenteeTransaction;
