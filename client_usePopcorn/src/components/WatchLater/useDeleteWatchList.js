import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleateWatchLaterApi } from "../../service/watchLaterApi";
import toast from "react-hot-toast";

export function useDeleteWatchLater() {
  const queryClient = useQueryClient();
  const { mutate: deleateWatch } = useMutation({
    mutationFn: deleateWatchLaterApi,
    onSuccess: (data) => {
      queryClient.invalidateQueries(["watchLater"], data.user);
      toast.success("Successfully WatchLater deleted");
    },
    onError: () => toast.error("Movie already deleted to WatchLater"),
  });
  return { deleateWatch };
}
