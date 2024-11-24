import {useMutation} from "@tanstack/react-query";
import axios from "axios";

type useUpdateProfileProps = {
  userId: string;
  onSuccess: () => void;
  onError: () => void;
};

const useUpdateProfile = ({onSuccess, onError, userId}: useUpdateProfileProps) => {
  return useMutation({
    mutationFn: (newData: any) =>
      axios.put(`http://localhost:3000/api/users/rentee/${userId}`, newData, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    onSuccess,
    onError,
  });
};

export default useUpdateProfile;
