import { useCallback, useState } from "react";
import { ApiError } from "../api/client";

interface UseApiMutationResult<TArgs extends unknown[], TResult> {
  mutate: (...args: TArgs) => Promise<TResult>;
  data: TResult | null;
  loading: boolean;
  error: string | null;
}

export function useApiMutation<TArgs extends unknown[], TResult>(
  fn: (...args: TArgs) => Promise<TResult>
): UseApiMutationResult<TArgs, TResult> {
  const [data, setData] = useState<TResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(
    async (...args: TArgs) => {
      setLoading(true);
      setError(null);
      try {
        const result = await fn(...args);
        setData(result);
        return result;
      } catch (err) {
        setError(err instanceof ApiError ? err.message : "Something went wrong");
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [fn]
  );

  return { mutate, data, loading, error };
}
