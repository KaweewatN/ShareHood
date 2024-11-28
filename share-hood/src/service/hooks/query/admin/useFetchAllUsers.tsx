import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {fetchData} from "@service/api-service/fetchData";
import {UserType} from "src/types/apiType";

const useFetchAllUsers = (): UseQueryResult<UserType> => {
  return useQuery<UserType>({
    queryKey: ["fetchAllUsers"],
    queryFn: () => fetchData<UserType>(`/api/users`),
  });
};

export default useFetchAllUsers;
