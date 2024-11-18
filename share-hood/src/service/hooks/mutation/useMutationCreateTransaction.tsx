import {useMutation} from "@tanstack/react-query";
import axios from "axios";

type useMutationCreateTransactionProps = {
  onSuccess: () => void;
  onError: () => void;
};

const useMutationCreateTransaction = ({onSuccess, onError}: useMutationCreateTransactionProps) => {
  return useMutation({
    mutationFn: (transactionData: any) =>
      axios.post(`http://localhost:3000/api/transaction`, transactionData),
    onSuccess,
    onError,
  });
};

export default useMutationCreateTransaction;