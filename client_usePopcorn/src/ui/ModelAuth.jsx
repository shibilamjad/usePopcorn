import styled from "styled-components";
import { device } from "./device";

export function ModelAuth({ children }) {
  return (
    <LoginContainer>
      <StyledLogin>
        <Stylecontent>{children}</Stylecontent>
      </StyledLogin>
    </LoginContainer>
  );
}
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const StyledLogin = styled.div`
  background: var(--color-login);
  width: 457px;
  height: 547px;
  border-radius: 4px;

  @media ${device.laptopL} {
    width: 457px;
    height: auto;
  }
  @media ${device.laptop} {
    width: 457px;
    height: auto;
  }
  @media ${device.tablet} {
    width: 357px;
    height: auto;
  }
  @media ${device.mobileL} {
    width: 307px;
    height: auto;
  }
  @media ${device.mobileS} {
    width: 227px;
    height: auto;
  }
`;

const Stylecontent = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-textColor);
  padding: 48px 60px 0px 60px;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 40px;
  gap: 20px;
  @media ${device.laptopL} {
    padding: 48px 60px 10px;
  }
  @media ${device.laptop} {
    padding: 48px 60px 10px;
  }
  @media ${device.tablet} {
    padding: 30px 45px 10px;
  }
  @media ${device.mobileL} {
    padding: 25px 40px 4px;
  }
  @media ${device.mobileS} {
    padding: 14px 20px 4px;
  }
`;
