import { QUERY_KEYS } from "@/constants/query-keys";
import { getNavbarMenuItems } from "@/services/navbar";
import { useQuery } from "@tanstack/react-query";

export function useNavbarItems() {
  return useQuery({
    queryKey: QUERY_KEYS.NAVBAR_ITEMS,
    queryFn: () => getNavbarMenuItems(),
  });
}
