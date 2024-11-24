import {useMutation} from "@tanstack/react-query";
import axios from "axios";

type useUpdateTransactionStatusProps = {
  transactionId: string;
  onSuccess: () => void;
  onError: () => void;
};

const useUpdateTransactionStatus = ({
  onSuccess,
  onError,
  transactionId,
}: useUpdateTransactionStatusProps) => {
  return useMutation({
    mutationFn: (newData: any) =>
      axios.put(
        `http://localhost:3000/api/transaction/owner?transactionId=${transactionId}`,
        newData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      ),
    onSuccess,
    onError,
  });
};

export default useUpdateTransactionStatus;
