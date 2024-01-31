import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { useMovie } from "../context/MovieContext";
import { useOutsideClick } from "../hooks/useClickOutSide";

function Modal({ children }) {
  const { handleClose } = useMovie();
  const ref = useOutsideClick(handleClose);
  return (
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={handleClose}>
          <HiXMark />
        </Button>
        <div>{children}</div>
      </StyledModal>
    </Overlay>
  );
}

export default Modal;

const StyledModal = styled.div`
  max-width: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-blacklight);
  /* background-color: rgba(255, 255, 255, 0.2); */
  border: 1px solid #fff;
  /* color: var(--color-h1); */
  border-radius: 10px;
  box-shadow: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  padding: 1rem 1rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.3rem;
  border-radius: 4px;
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  background-color: black;
  right: 1.9rem;

  & svg {
    width: 1.4rem;
    height: 1.4rem;
    color: #fff;
  }
`;
