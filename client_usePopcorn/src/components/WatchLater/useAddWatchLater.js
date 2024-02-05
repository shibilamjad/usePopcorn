import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addWatchLaterApi } from "../../service/watchLaterApi";
import toast from "react-hot-toast";

export function useAddWatchLater() {
  const queryClient = useQueryClient();
  const { mutate: addWatchLater } = useMutation({
    mutationFn: addWatchLaterApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["watchLater"], data.user);
      toast.success("Successfully WatchLater added");
    },
    onError: () => toast.error("Movie already added to WatchLater"),
  });
  return { addWatchLater };
}
