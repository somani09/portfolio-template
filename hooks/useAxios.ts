"use client";

import { useCallback, useState } from "react";
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { api, ApiErrorResponse } from "@/lib/axios";

/**
 * Return value interface for the useAxios hook.
 *
 * @template T - The expected shape of the response data
 *
 * @property loading - Indicates if a request is currently in progress
 * @property error - Error message from the last failed request, or null if no error
 * @property data - Response data from the last successful request, or null if no data
 * @property request - Function to execute an HTTP request with the given Axios config
 * @property reset - Function to reset the hook state (clears data, error, and loading)
 */
interface UseAxiosReturn<T> {
  loading: boolean;
  error: string | null;
  data: T | null;
  request: (config: AxiosRequestConfig) => Promise<AxiosResponse<T> | void>;
  reset: () => void;
}

/**
 * A custom hook for making HTTP requests using Axios with built-in state management.
 *
 * This hook provides a clean interface for handling API requests, including automatic
 * loading states, error handling, and response data management. It's built on top of
 * the configured Axios instance and handles all the boilerplate of request state.
 *
 * @template T - The expected type of the response data (defaults to unknown)
 * @returns An object containing loading state, error state, data, request function, and reset function
 *
 * @example
 * ```tsx
 * // Basic GET request
 * function UserProfile({ userId }: { userId: string }) {
 *   const { loading, error, data, request } = useAxios<User>();
 *
 *   useEffect(() => {
 *     request({ method: 'GET', url: `/users/${userId}` });
 *   }, [userId]);
 *
 *   if (loading) return <Loader />;
 *   if (error) return <Alert>{error}</Alert>;
 *   if (!data) return null;
 *
 *   return <div>{data.name}</div>;
 * }
 * ```
 *
 * @example
 * ```tsx
 * // POST request with form submission
 * function CreateUserForm() {
 *   const { loading, error, data, request, reset } = useAxios<User>();
 *
 *   const handleSubmit = async (formData: UserInput) => {
 *     const response = await request({
 *       method: 'POST',
 *       url: '/users',
 *       data: formData,
 *     });
 *
 *     if (response) {
 *       console.log('User created:', response.data);
 *       reset(); // Clear form state
 *     }
 *   };
 *
 *   return (
 *     <form onSubmit={handleSubmit}>
 *       {error && <Alert variant="error">{error}</Alert>}
 *       <Button disabled={loading}>
 *         {loading ? 'Creating...' : 'Create User'}
 *       </Button>
 *     </form>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Multiple requests with the same hook
 * function DataManager() {
 *   const { loading, error, data, request } = useAxios<any>();
 *
 *   const fetchUsers = () => request({ method: 'GET', url: '/users' });
 *   const fetchPosts = () => request({ method: 'GET', url: '/posts' });
 *
 *   return (
 *     <div>
 *       <Button onClick={fetchUsers}>Load Users</Button>
 *       <Button onClick={fetchPosts}>Load Posts</Button>
 *       {loading && <Spinner />}
 *       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
 *     </div>
 *   );
 * }
 * ```
 *
 * @remarks
 * State Management:
 * - `loading`: Set to `true` when request starts, `false` when it completes
 * - `error`: Contains error message on failure, cleared on new requests
 * - `data`: Contains response data on success, persists until new request or reset
 *
 * Error Handling:
 * - Extracts error messages from API responses (via ApiErrorResponse)
 * - Falls back to generic message if no specific error is provided
 * - Logs errors to console for debugging
 * - Returns undefined from `request()` function on error
 *
 * Best Practices:
 * - Use TypeScript generics to type the response data
 * - Call `reset()` to clear state when unmounting or navigating away
 * - Handle loading and error states in your UI
 * - Use the returned AxiosResponse for accessing headers, status codes, etc.
 */
export function useAxios<T = unknown>(): UseAxiosReturn<T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  /**
   * Execute an HTTP request with the provided Axios configuration.
   *
   * @param config - Axios request configuration object
   * @returns Promise resolving to the Axios response, or void if an error occurred
   */
  const request = useCallback(async (config: AxiosRequestConfig) => {
    setLoading(true);
    setError(null);

    try {
      const res = await api.request<T>(config);
      setData(res.data);
      return res;
    } catch (err) {
      const axiosErr = err as AxiosError<ApiErrorResponse>;
      const message =
        axiosErr.response?.data?.message ||
        axiosErr.response?.data?.error ||
        axiosErr.message ||
        "Network request failed";

      setError(message);
      console.error("[useAxios] Request failed:", {
        url: config.url,
        method: config.method,
        error: message,
      });
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Reset the hook state to its initial values.
   *
   * Clears all state including data, error, and loading flags.
   * Useful for cleaning up after form submissions or when unmounting components.
   */
  const reset = useCallback(() => {
    setLoading(false);
    setError(null);
    setData(null);
  }, []);

  return { loading, error, data, request, reset };
}
