import { QueryClient } from "@tanstack/react-query";

// Static site configuration - no server API calls
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Static site - no API endpoints needed
      retry: false,
      staleTime: Infinity, // Static content doesn't change
    },
  },
});

export { queryClient };

// For static wedding site - no API calls needed
export const apiRequest = async (url: string, options: RequestInit = {}) => {
  // Wedding invitation is static - no server endpoints
  console.warn('API calls not available in static deployment');
  return Promise.resolve({});
};