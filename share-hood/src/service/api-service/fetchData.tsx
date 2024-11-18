import axios, {AxiosRequestConfig} from "axios";

export async function fetchData<T>(apiUrl: string, options?: AxiosRequestConfig): Promise<T> {
  try {
    const res = await axios.get(apiUrl, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data;
    } else {
      throw error;
    }
  }
}
