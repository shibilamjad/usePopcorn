import styled from "styled-components";
import { useMovies } from "./useMovies";
import { MoviesList } from "./MoviesList";
import { Loading } from "../../ui/Loading";
import { ErrorMessage } from "../../ui/ErrorMessage";

export function HomeMovie() {
  const { isLoading, isError, movies } = useMovies();

  if (isLoading) return <Loading />;

  return (
    <HomeContainer>
      <StyledHome>
        {!isLoading && !isError && <MoviesList />}
        {isError && <ErrorMessage message={isError} />}
      </StyledHome>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px;
`;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-light);
  height: 100%;
  margin-top: 20px;

  /* gap: 87px; */
  padding: 10px;
  width: 80%;
  margin-bottom: 20px;
`;
