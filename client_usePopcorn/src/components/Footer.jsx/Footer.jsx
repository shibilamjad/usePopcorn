import styled from "styled-components";
import { device } from "../../ui/device";

function Footer() {
  return (
    <>
      <Container>
        <Bg>
          <StyledFooter>
            <FooterContainer>
              <StyledContent>
                <Wrapper>
                  <p>FAQ</p>
                  <p>Cookie Preferences</p>
                </Wrapper>
                <Wrapper>
                  <p>Help Center </p>
                  <p>Corporate Information </p>
                </Wrapper>
                <Wrapper>
                  <p>Terms of Use </p>
                  <p>Privacy </p>
                </Wrapper>
              </StyledContent>
            </FooterContainer>
            <P>Questions? Call 1-844-505-2993</P>
          </StyledFooter>
        </Bg>
      </Container>
    </>
  );
}

export default Footer;
const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Bg = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #1c1c1c;
  /* background: var(--color-blacklight); */

  color: #cfcfcf;
`;

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
  align-items: start;
  font-size: 15px;
  height: 100%;

  h1 {
    background-color: red;
  }

  @media ${device.mobileL} {
    font-size: 10px;
    width: 80%;
  }
  @media ${device.mobileS} {
    font-size: 10px;
    width: 80%;
  }
  @media ${device.tablet} {
    font-size: 12px;
    width: 80%;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;
  align-items: center;
  gap: 60px;
  justify-content: center;
  @media ${device.laptopL} {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: start;
    gap: 10px;
    padding: 1px;
    margin: 5px;
  }
  @media ${device.mobileL} {
    gap: 1px;
    padding: 1px;
    margin: 2px;
  }
  @media ${device.mobileS} {
    gap: 1px;
    padding: 1px;
    margin: 2px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const P = styled.p`
  padding: 15px 10px;
  /* padding-top: 15px; */
  /* padding-left: 10px; */
  @media ${device.laptopL} {
    padding-top: 1px;
    padding-left: 1px;
  }
`;
