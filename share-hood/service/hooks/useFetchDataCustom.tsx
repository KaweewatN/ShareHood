import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {fetchData} from "@service/api-service/fetchData";
import {UseFetchDataCustomProps} from "../../types/hookType";

const useFetchData = <T,>({
  queryKey,
  apiPath,
  staleTime,
  gcTime,
  refetchOnWindowFocus,
}: Omit<UseFetchDataCustomProps<T>, "data">): UseQueryResult<T> => {
  return useQuery<T>({
    queryKey: [queryKey],
    queryFn: async () => {
      try {
        const data = await fetchData<T>(apiPath);
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
    staleTime: staleTime,
    gcTime: gcTime,
    refetchOnWindowFocus: refetchOnWindowFocus,
  });
};

export default useFetchData;
