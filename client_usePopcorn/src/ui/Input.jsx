import styled from "styled-components";
import { device } from "./device";

export const Input = styled.input`
  padding: 10px 15px;
  width: 100%;
  border: transparent;
  color: var(--color-light);
  font-weight: 200;
  background-color: var(--color-input);
  border-radius: 4px;
  margin-bottom: 16px;
  &::placeholder {
    font-size: 15px;
    color: var(--color-inputFont);
  }
  &:focus {
    outline: none;
  }
  @media ${device.laptopL} {
    font-size: 16px;
    padding: 10px 15px;
  }
  @media ${device.laptop} {
    font-size: 16px;
    padding: 10px 15px;
  }
  @media ${device.tablet} {
    font-size: 14px;
    padding: 8px 12px;
    margin-bottom: 8px;
  }
  @media ${device.mobileL} {
    font-size: 12px;
    padding: 6px 10px;
    margin-bottom: 4px;
  }
  @media ${device.mobileS} {
    font-size: 12px;
    padding: 6px 10px;
    margin-bottom: 4px;
  }
`;
