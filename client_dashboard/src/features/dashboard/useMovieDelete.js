import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMovieApi } from "../../service/apiMovies";
import toast from "react-hot-toast";

export function useDeleteMovie() {
  const queryClient = useQueryClient();

  const { mutate: deleteMovie } = useMutation({
    mutationFn: deleteMovieApi,
    onSuccess: () => {
      toast.success("Movie succesfully deleted");
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteMovie };
}
