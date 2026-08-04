import { useCallback, useEffect, useState } from "react";
import { ApiError } from "../api/client";

interface UseApiQueryResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

interface QueryResult<T> {
  requestId: number;
  data: T | null;
  error: string | null;
}

/* fetcher must be stable (wrap it in useCallback at the call site) so this only re-runs when its real inputs change. */
export function useApiQuery<T>(fetcher: () => Promise<T>): UseApiQueryResult<T> {
  const [requestId, setRequestId] = useState(0);
  const [result, setResult] = useState<QueryResult<T>>({ requestId: -1, data: null, error: null });

  useEffect(() => {
    let cancelled = false;

    fetcher()
      .then((data) => {
        if (!cancelled) setResult({ requestId, data, error: null });
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setResult({
            requestId,
            data: null,
            error: err instanceof ApiError ? err.message : "Something went wrong",
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [fetcher, requestId]);

  const refetch = useCallback(() => setRequestId((v) => v + 1), []);

  const loading = result.requestId !== requestId;

  return { data: result.data, loading, error: loading ? null : result.error, refetch };
}
