import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import styled from "styled-components";
import { SideBar } from "./SideBar";
import { device } from "../ui/device";
export function AppLayout() {
  return (
    <>
      <StyledApp>
        <Header />
        <SideBar />
        <Main>
          <Outlet />
        </Main>
      </StyledApp>
    </>
  );
}

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 20rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: 100vw;
  transition: all 0.5;
  @media ${device.laptopL} {
    grid-template-columns: 18rem 1fr;
    transition: all 0.5;
  }
  @media ${device.laptop} {
    grid-template-columns: 15rem 1fr;
    transition: all 0.5;
  }
  @media ${device.tablet} {
    grid-template-columns: 8rem 1fr;
    transition: all 0.5;
  }
  @media ${device.mobileL} {
    grid-template-columns: 5rem 1fr;
    transition: all 0.5;
  }
  @media ${device.mobileS} {
    grid-template-columns: 3rem 1fr;
    transition: all 0.5;
  }
`;

const Main = styled.main`
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #e3e1ff;
`;
