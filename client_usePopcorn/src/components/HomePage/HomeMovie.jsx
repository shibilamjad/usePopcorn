import styled from "styled-components";
import { useMovies } from "./useMovies";
import { MoviesList } from "./MoviesList";
import { Loading } from "../../ui/Loading";
import { ErrorMessage } from "../../ui/ErrorMessage";

export function HomeMovie() {
  const { isLoading, isError, movies } = useMovies();

  if (isLoading) return <Loading />;

  return (
    <>
      {!isLoading && !isError && <MoviesList />}
      {isError && <ErrorMessage message={isError} />}
    </>
  );
}
