import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {fetchData} from "@service/api-service/fetchData";
import {UseFetchDataCustomProps} from "../../types/hookType";

const useFetchDataCustom = <T,>({
  queryKey,
  apiPath,
  staleTime,
  gcTime,
  refetchOnWindowFocus,
}: Omit<UseFetchDataCustomProps<T>, "data">): UseQueryResult<T> => {
  return useQuery<T>({
    queryKey: [queryKey],
    queryFn: async () => {
      const data = await fetchData<T>(apiPath);
      return data;
    },
    staleTime,
    gcTime,
    refetchOnWindowFocus,
  });
};

export default useFetchDataCustom;
