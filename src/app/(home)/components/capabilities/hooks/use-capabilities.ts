import { QUERY_KEYS } from "@/constants/query-keys";
import { getCapabilities } from "@/services/capabilities";
import { useQuery } from "@tanstack/react-query";

export function useCapabilities() {
  return useQuery({
    queryKey: QUERY_KEYS.CAPABILITIES,
    queryFn: () => getCapabilities(),
  });
}
