import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {fetchData} from "@service/api-service/fetchData";
import {TransactionType} from "src/types/apiType";

const useFetchOwnerItemTransactionById = (
  transactionId: string,
): UseQueryResult<TransactionType> => {
  return useQuery<TransactionType>({
    queryKey: ["fetchOwnerItemTransactionById", transactionId],
    queryFn: () =>
      fetchData<TransactionType>(`/api/transaction/owner?transactionId=${transactionId}`),
  });
};

export default useFetchOwnerItemTransactionById;
