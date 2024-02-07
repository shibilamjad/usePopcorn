import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMovies } from "../../service/movieApi";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/PAGE_SIZE";
import { useEffect, useState } from "react";

export function useMovies() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const currentPage = Number(searchParams.get("page") || 1);
  const currentGenre = searchParams.get("genre") || [];
  const currentRatings = searchParams.get("ratings") || [];

  const {
    data: {
      data: movies,
      limit,

      genre,
      ratings,
      pageCount,
    } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movies", currentPage, currentGenre, currentRatings],
    queryFn: () =>
      getMovies({
        page: currentPage,
        genre: currentGenre,
        ratings: currentRatings,
      }),
  });

  const pageCounts = Math.ceil(limit / PAGE_SIZE);
  if (currentPage <= pageCounts - 1) {
    queryClient.prefetchQuery({
      queryKey: ["movies", page + 1],
      queryFn: () =>
        getMovies({
          page: page + 1,
          genre: currentGenre,
          ratings: currentRatings,
        }),
    });
  }

  if (currentPage > 1) {
    queryClient.prefetchQuery({
      queryKey: ["movies", page - 1],
      queryFn: () =>
        getMovies({
          page: page - 1,
          genre: currentGenre,
          ratings: currentRatings,
        }),
    });
  }

  useEffect(() => {
    return () => {
      queryClient.cancelQueries(["movies", page + 1]);
      queryClient.cancelQueries(["movies", page - 1]);
    };
  }, []);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  return {
    error,
    movies,
    limit,
    isLoading,
    setPage,
    page: currentPage,
    pageCount,
    genre,
    ratings,
  };
}
