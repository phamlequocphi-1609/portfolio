import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from "axios";
import { API_CONFIG } from "./api-config";
import { ApiErrorPayload } from "@/types/api-response";

export const axiosClient: AxiosInstance = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: API_CONFIG.HEADERS,
});

axiosClient.interceptors.response.use(
  <T>(response: AxiosResponse<T>): T => response.data,
  (error: AxiosError<{ message?: string }>) => {
    const status = error?.response?.status;
    const message =
      error?.response?.data?.message ||
      error.message ||
      "An unexpected error occurred";
    const customError: ApiErrorPayload = {
      message,
      status,
      data: error?.response?.data,
    };

    if (process.env.NODE_ENV === "development") {
      console.error("[Portfolio API Error]:", {
        url: error?.config?.url,
        status,
        error: customError,
      });
    }

    return Promise.reject(customError);
  },
);

export default axiosClient;
