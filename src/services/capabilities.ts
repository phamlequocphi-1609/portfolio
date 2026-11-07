import { CapabilityApi } from "@/_mock/capabilities-items";
import axiosClient from "@/config/axios-client";
import { ApiResponse } from "@/types/api-response";

export const getCapabilities = async (): Promise<
  ApiResponse<CapabilityApi>
> => {
  try {
    return await axiosClient.get("/capabilities");
  } catch (err) {
    console.error("Error fetching capabilities", err);
    throw err;
  }
};
