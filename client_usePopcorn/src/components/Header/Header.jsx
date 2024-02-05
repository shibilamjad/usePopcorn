import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

import { fadeInVariants } from "../../ui/variation";
import { device } from "../../ui/device";
import { useDarkMode } from "../../context/DarkModeContext";
import { useLogout } from "../SignIn/useLogout";
import { useLogin } from "../SignIn/useLogin";

function Header() {
  const { theme, handleClick: handleDarkMode } = useDarkMode();
  const { logout, isLoading } = useLogout();
  const { isLogged } = useLogin();
  const userId = localStorage.getItem("token");
  const navigate = useNavigate();

  function handleLogout() {
    logout();
  }
  console.log(isLogged);
  return (
    <header>
      <HeaderContainer>
        <motion.div
          variants={fadeInVariants("left")}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <Logo>Usepopcorn 🍟</Logo>
        </motion.div>
        <motion.div
          variants={fadeInVariants("right")}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {userId && (
            <BtnContainer>
              <BtnMode variation="mode" onClick={() => navigate("/watchLater")}>
                WatchLater
              </BtnMode>
              <BtnMode variation="mode" onClick={handleDarkMode}>
                {theme ? <FaRegMoon /> : <BsFillSunFill />}
              </BtnMode>

              <BtnMode
                disabled={isLoading}
                onClick={handleLogout}
                variation="logout"
              >
                Logout
              </BtnMode>
            </BtnContainer>
          )}
        </motion.div>
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
  @media ${device.laptop} {
    padding: 19px 46px 15px 46px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3;
  }
  @media ${device.tablet} {
    padding: 19px 46px 15px 46px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3;
  }
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    padding: 4px;
    align-items: center;
    justify-content: space-around;
    transition: all 0.3;
  }
  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
    padding: 4px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3;
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
  &:hover,
  &:focus {
    background-color: #fff;
    color: #3730a3;
    transition: background 0.5s;
  }
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
