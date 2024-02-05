import styled from "styled-components";
import { device } from "./device";

export function Model({ children }) {
  return (
    <HomeContainer>
      <StyledHome>
        <StyledMovieList>{children}</StyledMovieList>
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

const StyledMovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-bottom: 10px;
`;
