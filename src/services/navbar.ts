import { NavItem } from "@/types/navbar";
import axiosClient from "@/config/axios-client";
import { ApiResponse } from "@/types/api-response";

export const getNavbarMenuItems = async (): Promise<ApiResponse<NavItem>> => {
  try {
    return await axiosClient.get("/navbar-items");
  } catch (error) {
    console.error("Error fetching navbar menu items:", error);
    throw error;
  }
};
