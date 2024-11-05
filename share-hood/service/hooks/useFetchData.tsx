import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {fetchData} from "@service/api-service/fetchData";

interface UseFetchDataProps<T> {
  queryKey: string;
  apiPath: string;
  transformData?: (data: T) => T;
}

const useFetchData = <T,>({
  queryKey,
  apiPath,
  transformData,
}: Omit<UseFetchDataProps<T>, "data">): UseQueryResult<T> => {
  return useQuery<T>({
    queryKey: [queryKey],
    queryFn: async () => {
      try {
        const data = await fetchData<T>(apiPath);
        return transformData ? transformData(data) : data; // Transform data if provided
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Re-throw to let TanStack Query handle the error state
      }
    },
    staleTime: 5000, // Customize stale time as needed
    gcTime: 10000, // Customize cache time as needed
    refetchOnWindowFocus: true, // Optional: refetch on window focus
  });
};

export default useFetchData;
