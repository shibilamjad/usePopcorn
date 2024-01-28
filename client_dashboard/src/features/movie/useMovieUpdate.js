import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMovieApi } from "../../service/apiMovies";
import toast from "react-hot-toast";

export function useMovieUpdate() {
  const queryClient = useQueryClient();

  const { mutate: updateMovie } = useMutation({
    mutationFn: ({ movieId, image, title, ratings, genre }) =>
      updateMovieApi(movieId, image, title, ratings, genre),
    onSuccess: () => {
      toast.success("Movie successfully updated");
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: (error) => {
      console.error("Error updating Movie:", error);
      toast.error(`Failed to update Movie: ${error.message}`);
    },
  });
  return { updateMovie };
}
