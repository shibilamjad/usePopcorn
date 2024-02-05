import { useQuery } from "@tanstack/react-query";
import { watchLaterApi } from "../../service/watchLaterApi";

export function useWatchLater() {
  const { data: watchLater, isLoading } = useQuery({
    queryKey: ["watchLater"],
    queryFn: watchLaterApi,
  });
  return { isLoading, watchLater };
}
