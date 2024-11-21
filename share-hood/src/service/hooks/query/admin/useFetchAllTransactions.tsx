import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {fetchData} from "@service/api-service/fetchData";
import {TransactionType} from "src/types/apiType";

const useFetchAllTransactions = (): UseQueryResult<TransactionType> => {
  return useQuery<TransactionType>({
    queryKey: ["fetchAllTransactions"],
    queryFn: () => fetchData<TransactionType>(`/api/transaction`),
  });
};

export default useFetchAllTransactions;
