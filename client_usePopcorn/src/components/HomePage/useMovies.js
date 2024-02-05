import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMovies } from "../../service/movieApi";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/PAGE_SIZE";
import { useState } from "react";

export function useMovies() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const currentPage = Number(searchParams.get("page") || 1);

  const {
    data: { data: movies, limit, pageCount } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", currentPage],
    queryFn: () => getMovies({ page: currentPage }),
  });

  const pageCounts = Math.ceil(limit / PAGE_SIZE);
  if (currentPage <= pageCounts - 1) {
    queryClient.prefetchQuery({
      queryKey: ["movies", page + 1],
      queryFn: () => getMovies({ page: page + 1 }),
    });
  }

  if (currentPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["movies", page - 1],
      queryFn: () => getMovies({ page: page - 1 }),
    });
  }
  return {
    error,
    movies,
    limit,
    isLoading,
    setPage,
    page: currentPage,
    pageCount,
  };
}
