import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { SideBar } from "./SideBar";

export function Header() {
  return (
    <>
      <header className="bg-indigo-800 text-white">
        <StyledHeader>
          <div>
            <h1>Dashboard</h1>
          </div>
          <div>
            <NavLink to="login">Login</NavLink>
          </div>
        </StyledHeader>
      </header>
    </>
  );
}

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
