import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {fetchData} from "@service/api-service/fetchData";

const useFetchAdminSummary = (): UseQueryResult<any> => {
  return useQuery<any>({
    queryKey: ["fetchAdminSummary"],
    queryFn: () => fetchData<any>(`/api/admin/summary`),
  });
};

export default useFetchAdminSummary;
