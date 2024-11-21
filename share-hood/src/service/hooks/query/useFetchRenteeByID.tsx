import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {fetchData} from "@service/api-service/fetchData";
import {UserType} from "src/types/apiType";

const useFetchRenteeByID = (userId: string): UseQueryResult<UserType> => {
  return useQuery<UserType>({
    queryKey: ["fetchUser", userId],
    queryFn: () => fetchData<UserType>(`/api/users/rentee/${userId}`),
  });
};

export default useFetchRenteeByID;
