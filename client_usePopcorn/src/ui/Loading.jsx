import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  display: inline-block;
  width: 80px;
  height: 80px;

  &::after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

const StyledLoader = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: rgba(0, 0, 0, 0.6); */
  /* backdrop-filter: blur(4px); */
  width: 100vw;
  height: 100vh;
`;

export function Loading() {
  return (
    <>
      <StyledLoader>
        <Loader></Loader>
      </StyledLoader>
    </>
  );
}
