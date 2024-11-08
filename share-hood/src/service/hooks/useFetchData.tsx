import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {fetchData} from "@service/api-service/fetchData";
import {UseFetchDataProps} from "../../types/hookType";

const useFetchData = <T,>({
  queryKey,
  apiPath,
}: Omit<UseFetchDataProps<T>, "data">): UseQueryResult<T> => {
  return useQuery<T>({
    queryKey: [queryKey],
    queryFn: async () => {
      const data = await fetchData<T>(apiPath);
      return data;
    },
    refetchOnWindowFocus: true,
  });
};

export default useFetchData;
