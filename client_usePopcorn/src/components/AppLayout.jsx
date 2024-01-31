import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer.jsx/Footer";
import styled from "styled-components";

function AppLayout() {
  return (
    <>
      <StyledContainer>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Gap>
          <Footer />
        </Gap>
      </StyledContainer>
    </>
  );
}

export default AppLayout;

const StyledContainer = styled.div`
  width: 100%;
  display: grid;
  height: 100dvh;

  grid-template-rows: auto 1fr auto;
`;

const Main = styled.main`
  overflow: scroll;
  scroll-behavior: smooth;
  height: 100vh;
  background-color: var(--color-blacklight);
  padding-top: 40px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Gap = styled.div`
  padding-top: 40px;
  background-color: var(--color-blacklight);
`;
