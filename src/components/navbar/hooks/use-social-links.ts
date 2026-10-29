import { QUERY_KEYS } from "@/constants/query-keys";
import { getSocialLinks } from "@/services/navbar";
import { useQuery } from "@tanstack/react-query";

export function useSocialLinks() {
  return useQuery({
    queryKey: QUERY_KEYS.SOCIAL_LINKS,
    queryFn: () => getSocialLinks(),
  });
}
