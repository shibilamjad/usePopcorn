import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { uploadMovieApi } from "../../service/apiMovies";

export function useMovieCreate() {
  const queryClient = useQueryClient();
  const { mutate: createMovie } = useMutation({
    mutationFn: uploadMovieApi,
    onSuccess: () => {
      toast.success("Movie successfully created");
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createMovie };
}
