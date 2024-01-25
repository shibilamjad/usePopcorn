import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../service/apiMovies";

export function useMovies() {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });
  return { movies, isLoading };
}
