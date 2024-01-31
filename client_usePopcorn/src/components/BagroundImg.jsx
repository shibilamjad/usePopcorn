import styled from "styled-components";

export function BagroundImg() {
  return (
    <BG>
      <img src="../../public/bg.png" alt="" />
    </BG>
  );
}

const BG = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-repeat: repeat;
  img {
    height: 1044px;
    width: 1954px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
