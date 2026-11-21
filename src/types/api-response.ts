export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T[];
}

export interface ApiErrorPayload {
  message?: string;
  status?: number;
  data?: unknown;
}
