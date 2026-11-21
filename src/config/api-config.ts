export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "/api",
  TIMEOUT: 1000,
  HEADERS: {
    "Content-Type": "application/json",
  },
};
