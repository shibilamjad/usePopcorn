import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { device } from "./device";
import styled from "styled-components";

export function SearchInput() {
  const { query, handleChange, setQuery } = useContext(MovieContext);
  function handleClear() {
    setQuery("");
  }
  return (
    <StyledInput>
      <Input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleChange}
      />
      <Button onClick={handleClear}>&#10540;</Button>
    </StyledInput>
  );
}

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 40px 10px 15px;
  border-radius: 20px;
  border: transparent;
  color: var(--color-black);
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 15px;
  position: relative;
  box-sizing: border-box;
  transition: all 0.3;
  &:focus {
    outline: none;
  }
  @media ${device.mobileS} {
    padding: 10px 40px 10px 15px;
    transition: all 0.3;
  }
  @media ${device.mobileL} {
    padding: 10px 40px 10px 15px;
    transition: all 0.3;
  }
  @media ${device.tablet} {
    padding: 10px 40px 10px 15px;
    transition: all 0.3;
  }
  @media ${device.laptop} {
    padding: 10px 40px 10px 15px;
    transition: all 0.3;
  }
  @media ${device.laptopL} {
    padding: 10px 40px 10px 15px;
    transition: all 0.3;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 15px;
  background-color: transparent;
  color: var(--color-black);
  border: transparent;
  padding: 10px;
  padding-bottom: 25px;
  cursor: pointer;
`;
