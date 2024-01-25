import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadMovieApi } from "../../service/apiMovies";
import toast from "react-hot-toast";

export function useMovieCreate() {
  const queryClient = useQueryClient();
  const { mutate: createMovie } = useMutation({
    mutationFn: uploadMovieApi,

    onSuccess: () => {
      toast.success("Movie succesfully created");
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { createMovie };
}
