import {useEffect, useRef, useState, useCallback} from 'react';
type Cache<T> = {[url: string]: T};

function useFetch<T = unknown>(
  url: string,
  options?: RequestInit,
): {
  data?: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
} {
  const cache = useRef<Cache<T>>({});
  const cancelRequest = useRef<boolean>(false);
  const [data, setData] = useState<T | null | undefined>(undefined);

  const [loading, setLoading] = useState<boolean>(false);

  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    cancelRequest.current = false;
    try {
      setLoading(true);
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const d = (await response.json()) as T;

      cache.current[url] = d;
      if (cancelRequest.current) {
        return;
      }

      setLoading(false);
      setData(d);
    } catch (e) {
      if (cancelRequest.current) {
        return;
      }

      setError(e as Error);
    }
  }, [url, options]);
  useEffect(() => {
    fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [fetchData]);

  return {data, loading, error, refetch: fetchData};
}

export default useFetch;
