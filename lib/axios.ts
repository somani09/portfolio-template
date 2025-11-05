import axios, { AxiosError, AxiosResponse } from "axios";

/**
 * Standard API error response structure from the backend.
 *
 * This interface defines the expected shape of error responses from your API,
 * making error handling predictable and type-safe across the application.
 *
 * @property message - Primary error message from the API
 * @property error - Alternative error message field (some APIs use this)
 * @property statusCode - HTTP status code (optional, some APIs include this)
 * @property errors - Array of validation errors (optional, for form validation)
 */
export interface ApiErrorResponse {
  message?: string;
  error?: string;
  statusCode?: number;
  errors?: Array<{ field: string; message: string }>;
  [key: string]: unknown;
}

/**
 * Base Axios instance configured for the application's API.
 *
 * This is the main HTTP client instance that should be used for all API requests.
 * It includes preconfigured settings, authentication handling, and error interception.
 *
 * @example
 * ```tsx
 * import { api } from '@/lib/axios';
 *
 * // GET request
 * const response = await api.get('/users');
 *
 * // POST request
 * const result = await api.post('/users', { name: 'John' });
 *
 * // With custom config
 * const data = await api.request({
 *   method: 'PUT',
 *   url: '/users/123',
 *   data: { name: 'Jane' },
 *   headers: { 'X-Custom-Header': 'value' }
 * });
 * ```
 *
 * @remarks
 * Configuration:
 * - Base URL: Set via `NEXT_PUBLIC_API_URL` environment variable
 * - Timeout: 10 seconds (prevents hanging requests)
 * - Default headers: JSON content type and accept headers
 * - Auto-attaches Bearer token from localStorage if available
 * - Handles 401 responses by clearing credentials
 */
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/**
 * REQUEST INTERCEPTOR
 *
 * Automatically attaches authentication token to all outgoing requests.
 * The token is retrieved from localStorage and added as a Bearer token
 * in the Authorization header.
 *
 * @remarks
 * - Only runs in browser context (checks for window object)
 * - Token key in localStorage: "token"
 * - Uses Bearer token format: "Bearer <token>"
 */
api.interceptors.request.use(
  (config) => {
    // Only access localStorage in browser environment
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

/**
 * RESPONSE INTERCEPTOR
 *
 * Handles API responses and errors globally:
 * - Passes successful responses through unchanged
 * - Intercepts 401 (Unauthorized) responses to clear auth state
 * - Normalizes error messages for consistent error handling
 *
 * @remarks
 * Error Handling:
 * - 401 responses trigger automatic logout (clears token)
 * - Error messages are extracted in order of priority:
 *   1. response.data.message
 *   2. response.data.error
 *   3. error.message
 *   4. Generic "Unexpected error" fallback
 */
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    // Handle unauthorized access
    if (error.response?.status === 401) {
      console.warn("Unauthorized – clearing credentials");
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        // Uncomment to redirect to login page:
        // window.location.href = "/login";
      }
    }

    // Normalize error message for consistent handling
    const normalizedError: AxiosError<ApiErrorResponse> = {
      ...error,
      message:
        error.response?.data?.message ||
        error.response?.data?.error ||
        error.message ||
        "Unexpected error",
    };

    return Promise.reject(normalizedError);
  },
);
