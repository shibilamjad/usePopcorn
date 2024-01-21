import styled from "styled-components";
import { ImageButton } from "../ui/ImageButton";
import { InputRange } from "../ui/InputRange";
import { device } from "../ui/device";
import { InputCheckBox } from "../ui/InputCheckBox";
import { Button } from "../ui/Button";
import Modal from "../ui/Modal";

export function Movies() {
  return (
    <Modal>
      <h1 className="p-2 text-2xl">Edit / Create Movie</h1>
      <ImageButton />
      <div>
        <p>Title</p>
        <InputText type="text" placeholder="Tilte..." />
      </div>
      <InputRange />
      <div>
        <p>Genre</p>
        <InputCheckBox />
      </div>
      <Button>Submit</Button>
    </Modal>
  );
}

const InputText = styled.input`
  color: #3730a3;
  border: transparent;
  padding: 5px 10px;
  border-radius: 4px;
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
  &:focus {
    outline: none;
  }
`;
