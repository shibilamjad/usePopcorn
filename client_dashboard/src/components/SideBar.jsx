import styled from "styled-components";
import MainNav from "./MainNav";
import { device } from "../ui/device";

export function SideBar() {
  return (
    <StyledSideBar>
      <MainNav />
    </StyledSideBar>
  );
}

const StyledSideBar = styled.aside`
  background-color: white;
  padding: 3.2rem 2.4rem;
  border-right: 1px solid #d7d7d7;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  color: #3730a3;
  @media ${device.laptopL} {
    padding: 3.2rem 2.4rem;
    transition: all 0.5;
  }
  @media ${device.laptop} {
    padding: 3.2rem 2.4rem;
    transition: all 0.5;
  }
  @media ${device.tablet} {
    padding: 2rem 1.4rem;
    transition: all 0.5;
  }
  @media ${device.mobileL} {
    padding: 1rem 0.4rem;
    transition: all 0.5;
  }
  @media ${device.mobileS} {
    padding: 1rem 0.4rem;
    transition: all 0.5;
  }
`;
