import {useMutation} from "@tanstack/react-query";
import axios from "axios";

type useMutationCreateUserProps = {
  role: string;
  onSuccess: () => void;
  onError: () => void;
};

const useMutationCreateUser = ({role, onSuccess, onError}: useMutationCreateUserProps) => {
  return useMutation({
    mutationFn: (userData: any) => axios.post(`api/users/${role}`, userData),
    onSuccess,
    onError,
  });
};

export default useMutationCreateUser;
