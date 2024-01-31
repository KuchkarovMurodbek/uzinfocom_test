import { useState, useEffect } from "react";
import publicAxios from "../api/publicAxios";

interface FetchData<T> {
  data: T;
  isLoading: boolean;
  error: Error | null;
  count: number | null;
  total: number | null;
  pagesCount: number | null;
}

type QueryParams = Record<string, string>;


const useFetch = <T>( baseUrl: string, queryParams?: QueryParams, change?: boolean ): FetchData<T[]> => {
  const [data, setData] = useState<T[]>([]);
  const [count, setCount] = useState<number | null>(0);
  const [total, setTotal] = useState<number | null>(0);
  const [pagesCount, setPagesCount] = useState<number | null>(0);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true);
      try {
        let url = baseUrl;
        const queryString = new URLSearchParams(queryParams).toString();

        const apiUrl = `${url}`;

        const apiUrlWithParams = queryString ? `${apiUrl}?${queryString}` : apiUrl;
        const response = await publicAxios.get(apiUrlWithParams);

        if (!response) {
          throw new Error("Network response was not ok.");
        }
        if (response) {
          const results = await response.data.data;
          const count = await response.data.count;
          const total = await response.data.total;
          const pagesCount=await response.data.pagesCount
          setData(results);
          setCount(count);
          setTotal(total)
          setPagesCount(pagesCount)
        }
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseUrl, new URLSearchParams(queryParams).toString(), change]);

  return { data, isLoading, error, count ,total,pagesCount};
};

export default useFetch;
