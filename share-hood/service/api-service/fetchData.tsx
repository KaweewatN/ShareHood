import axios from "axios";

export async function fetchData<T>(apiUrl: string): Promise<T> {
  try {
    const res = await axios.get(apiUrl);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw error.response.data;
    } else {
      throw error;
    }
  }
}
