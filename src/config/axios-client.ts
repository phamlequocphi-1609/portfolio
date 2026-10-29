import axios, { type AxiosInstance, type AxiosResponse } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "/api";

export const axiosClient: AxiosInstance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error) => {
    const customError = error.response?.data || {
      message: error.message || "An unexpected error occurred",
    };

    if (process.env.NODE_ENV === "development") {
      console.error("[API Error]:", {
        url: error.config?.url,
        status: error.response?.status,
        error: customError,
      });
    }

    return Promise.reject(customError);
  },
);

export default axiosClient;
