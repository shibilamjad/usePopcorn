import styled, { css } from "styled-components";
import { device } from "../../ui/device";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useDarkMode } from "../../context/DarkModeContext";
import { FaRegMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

function Header() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { theme, handleClick: handleDarkMode } = useDarkMode();

  function handleClick() {
    setIsLoggedIn((prev) => !prev);
  }

  return (
    <header>
      <HeaderContainer>
        <div>
          <Logo>Usepopcorn 🍟</Logo>
        </div>
        <BtnContainer>
          <BtnMode variation="mode">Bookmark</BtnMode>
          <BtnMode variation="mode" onClick={handleDarkMode}>
            {theme ? <FaRegMoon /> : <BsFillSunFill />}
          </BtnMode>
          <NavLink to="sign-in">
            {isLoggedIn && (
              <BtnMode variation="logout" onClick={handleClick}>
                Logout
              </BtnMode>
            )}
          </NavLink>
        </BtnContainer>
      </HeaderContainer>
    </header>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background-color: #3730a3;
  padding: 19px 46px 15px 46px;
  @media ${device.mobileS} {
    padding: 4px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
`;

const BtnMode = styled.button`
  background-color: transparent;
  border-radius: 20px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 500;
  ${(props) => variation[props.variation]}
  svg {
    padding: 0px;
  }

  @media ${device.laptopL} {
    padding: 12px 18px;
    border-radius: 17px;
    font-size: 14px;
  }
  @media ${device.laptop} {
    padding: 10px 15px;
    font-size: 13px;
  }
  @media ${device.tablet} {
    padding: 7px 12px;
    border-radius: 15px;
    font-size: 12px;
  }
  @media ${device.mobileL} {
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 12px;
  }
  @media ${device.mobileS} {
    padding: 5px 5px;
    border-radius: 12px;
    font-size: 12px;
  }
`;
const Logo = styled.h1`
  font-size: 36px;
`;

const variation = {
  mode: css`
    border: 1px solid var(--color-light);
    color: var(--color-light);
  `,
  logout: css`
    background-color: var(--color-light);
    color: var(--color-black);
    border: transparent;
  `,
};
