import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiCalendarDays, HiHome, HiHomeModern } from "react-icons/hi2";
import { device } from "./device";

function MainNav() {
  return (
    <nav>
      <NavList>
        <H1>🍟usePopcorn</H1>
        <H2>🍟</H2>
        <li>
          <StyledNavLink to="/dashboard">
            <HiHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/movie">
            <HiCalendarDays />
            <span>Movie</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/genre">
            <HiHomeModern />
            <span>Genre</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;

const H2 = styled.h1`
  font-size: 0px;
  transition: all 0.5;
  @media ${device.tablet} {
    padding-left: 16px;
    font-size: 30px;
    transition: all 0.5;
  }

  @media ${device.mobileL} {
    padding-left: 10px;
    font-size: 30px;
    transition: all 0.5;
  }
  @media ${device.mobileS} {
    padding-left: 0px;
    font-size: 30px;
    transition: all 0.5;
  }
`;
const H1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-top: 80px;
  padding-bottom: 40px;
  transition: all 0.5;
  @media ${device.laptopL} {
    font-size: 35px;
    transition: all 0.5;
    padding-bottom: 40px;
  }
  @media ${device.laptop} {
    font-size: 30px;
    padding-bottom: 40px;
    transition: all 0.5;
  }
  @media ${device.tablet} {
    font-size: 0px;
    transition: all 0.5;
  }
  @media ${device.mobileL} {
    font-size: 0px;
    transition: all 0.5;
  }
  @media ${device.mobileS} {
    font-size: 0px;
    transition: all 0.5;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    color: #3730a3;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.6rem 1rem;
    transition: all 0.3s;

    @media ${device.laptopL} {
      font-size: 1rem;
      font-weight: 500;
      padding: 0.6rem 1rem;
      transition: all 0.5;
    }
    @media ${device.laptop} {
      font-size: 1rem;
      padding: 0.6rem 1rem;
      transition: all 0.5;
    }
    @media ${device.tablet} {
      font-size: 0rem;
      padding: 0.6rem 1rem;
      transition: all 0.5;
    }
    @media ${device.mobileL} {
      font-size: 0rem;
      padding: 0.4rem 0.7rem;
      transition: all 0.5;
    }
    @media ${device.mobileS} {
      font-size: 0rem;
      font-weight: 500;
      padding: 0.2rem 0.4rem;
      transition: all 0.5;
    }
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: #efefef;
    background-color: #3730a3;
    border-radius: 10px;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #3730a3;
    transition: all 0.3s;
    @media ${device.laptopL} {
      width: 2.4rem;
      height: 2.4rem;
      transition: all 0.5;
    }
    @media ${device.laptop} {
      width: 2.4rem;
      height: 2.4rem;
      transition: all 0.5;
    }
    @media ${device.tablet} {
      width: 2.4rem;
      height: 2.4rem;
      padding-left: 6px;
      transition: all 0.5;
    }
    @media ${device.mobileL} {
      width: 2rem;
      height: 2rem;
      padding-left: 6px;
      transition: all 0.5;
    }
    @media ${device.mobileS} {
      width: 1.4rem;
      height: 1.4rem;
      padding-left: 3px;
      transition: all 0.5;
    }
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: #efefef;
  }
`;
