export interface UseFetchDataProps<T> {
  queryKey: string;
  apiPath: string;
}

export interface UseFetchDataCustomProps<T> {
  queryKey: string;
  apiPath: string;
  staleTime: number;
  gcTime: number;
  refetchOnWindowFocus: boolean;
}
