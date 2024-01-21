import styled from "styled-components";
import { MovieList } from "../components/MovieList";

export function Dashboard() {
  return (
    <>
      <StyledMovieList>
        <MovieList />
        <MovieList />
        <MovieList />
        <MovieList />
        <MovieList />
        <MovieList />
      </StyledMovieList>
    </>
  );
}
const StyledMovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;
