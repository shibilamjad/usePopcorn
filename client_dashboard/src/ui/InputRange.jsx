import { useState } from "react";
import styled from "styled-components";
import { device } from "./device";

export function InputRange() {
  const [range, setRange] = useState(0);
  const [step, setStep] = useState(1);
  function handleMove(e) {
    setRange(e.target.value);
    setStep(1);
  }
  return (
    <>
      <StyledRange>
        <p>Rating</p>
        <input
          type="range"
          min={1}
          max={5}
          value={range}
          className="range bg-slate-100 "
          step={step}
          onChange={handleMove}
        />
        <div className="w-full flex justify-between  px-2">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </StyledRange>
    </>
  );
}
const StyledRange = styled.div`
  width: 400px;
  @media ${device.laptopL} {
    width: 400px;
    height: auto;
  }
  @media ${device.laptop} {
    width: 400px;
    height: auto;
  }
  @media ${device.tablet} {
    width: 200px;
    height: auto;
  }
  @media ${device.mobileL} {
    width: 200px;
    height: auto;
  }
  @media ${device.mobileS} {
    width: 200px;
    height: auto;
  }
`;
