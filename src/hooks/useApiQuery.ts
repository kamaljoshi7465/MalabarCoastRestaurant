import { useCallback, useEffect, useState } from "react";
import { ApiError } from "../api/client";

interface UseApiQueryResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  unauthorized: boolean;
  refetch: () => void;
}

interface QueryResult<T> {
  requestId: number;
  data: T | null;
  error: string | null;
  unauthorized: boolean;
}

/* fetcher must be stable (wrap it in useCallback at the call site) so this only re-runs when its real inputs change. */
export function useApiQuery<T>(fetcher: () => Promise<T>): UseApiQueryResult<T> {
  const [requestId, setRequestId] = useState(0);
  const [result, setResult] = useState<QueryResult<T>>({ requestId: -1, data: null, error: null, unauthorized: false });

  useEffect(() => {
    let cancelled = false;

    fetcher()
      .then((data) => {
        if (!cancelled) setResult({ requestId, data, error: null, unauthorized: false });
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setResult({
            requestId,
            data: null,
            error: err instanceof ApiError ? err.message : "Something went wrong",
            unauthorized: err instanceof ApiError && err.status === 401,
          });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [fetcher, requestId]);

  const refetch = useCallback(() => setRequestId((v) => v + 1), []);

  const loading = result.requestId !== requestId;

  return { data: result.data, loading, error: loading ? null : result.error, unauthorized: loading ? false : result.unauthorized, refetch };
}
