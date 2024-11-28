import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {fetchData} from "@service/api-service/fetchData";
import {UserType} from "src/types/apiType";

const useFetchUserByID = (userId: string, role: string): UseQueryResult<UserType> => {
  return useQuery<UserType>({
    queryKey: ["fetchUserById", userId],
    queryFn: () => fetchData<UserType>(`/api/users/${role}/${userId}`),
  });
};

export default useFetchUserByID;
