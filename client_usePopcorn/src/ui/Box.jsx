import styled from "styled-components";
import { device } from "./device";

export function Box({ children }) {
  return (
    <Boxs>
      <StyledCard>
        <StledContainer>{children}</StledContainer>
      </StyledCard>
    </Boxs>
  );
}

const Boxs = styled.div`
  width: 400px;
  background-color: #3730a3;
  border-radius: 10px;

  @media ${device.laptopL} {
    width: 400px;
    transition: all 0.5;
  }
  @media ${device.laptop} {
    width: 400px;

    transition: all 0.5;
  }
  @media ${device.tablet} {
    width: 400px;
    transition: all 0.5;
  }
  @media ${device.mobileL} {
    width: 340px;
    height: 370px;
    transition: all 0.5;
  }
  @media ${device.mobileS} {
    width: 280px;
    /* height: 100%; */
    transition: all 0.5;
  }
`;

const StyledCard = styled.div`
  width: 100%;
  height: 290px;
  border-radius: 10px;
  transition: all 0.5s;
  img {
    width: 100%;
    height: 290px;
    border-radius: 10px 0 0 10px;
    @media ${device.laptop} {
      width: 100%;
      height: 290px;
      border-radius: 10px 0 0 10px;
    }
    @media ${device.tablet} {
      width: 100%;
      height: 290px;
      border-radius: 10px 0 0 10px;
    }
    @media ${device.mobileL} {
      width: 100%;
      height: 370px;
      border-radius: 10px 0 0 10px;
    }
    @media ${device.mobileS} {
      width: 100%;
      height: 370px;
      border-radius: 10px 0 0 10px;
    }
  }
`;
const StledContainer = styled.div`
  display: grid;
  border-radius: 10px;
  grid-template-columns: 1fr 1fr;
`;
