import styled from "styled-components";
import { MovieList } from "../features/dashboard/MovieList";

export function Dashboard() {
  return (
    <>
      <StyledMovieList>
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
