import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {fetchData} from "@service/api-service/fetchData";
import {TransactionType} from "src/types/apiType";

const useFetchRenteeTransactionById = (
  userId: string,
  transactionId: string,
): UseQueryResult<TransactionType> => {
  return useQuery<TransactionType>({
    queryKey: ["fetchRenteeTransaction", userId],
    queryFn: () =>
      fetchData<TransactionType>(`/api/transaction/${userId}?transactionId=${transactionId}`),
  });
};

export default useFetchRenteeTransactionById;
