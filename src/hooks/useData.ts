import { useEffect, useState } from "react";
import apiClient from "../service/apiClient";
import { CanceledError } from "axios";

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await apiClient.get<T[]>(endpoint, {
          signal: controller.signal,
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setError((error as Error).message);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [endpoint]);

  return { data, error, loading };
};

export default useData;