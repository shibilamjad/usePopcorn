import Modal from "../../ui/Modal";
import { device } from "../../ui/device";
// import { InputCheckBox } from "../../ui/InputCheckBox";
import { Button } from "../../ui/Button";
import styled from "styled-components";
import { useState } from "react";
// import { useGenre } from "../genre/useGenre";
// import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import { useMovieGenre } from "./useMovieGenre";
import { Loader } from "../../ui/Loader";
import { useGenre } from "../genre/useGenre";

export function CreateMovie() {
  const [range, setRange] = useState(0);
  const [step, setStep] = useState(1);
  const [addImage, setAddImage] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  const { genre, isLoading } = useGenre();
  // const { movieGenre, isLoading } = useMovieGenre();
  // console.log(genre);
  // console.log(movieGenre);

  function handleAddimg(e) {
    const selectedFile = e.target.files[0];
    setAddImage(selectedFile);
  }

  function handleMove(e) {
    setRange(e.target.value);
    setStep(1);
  }

  function onSubmit(data) {
    console.log(data);
  }

  if (isLoading) return <Loader />;
  console.log();
  return (
    <Modal>
      <h1 className="p-2 text-2xl">Edit / Create Movie</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <button>
          <Label>
            <Input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleAddimg}
            />
            <p>Upload image</p>
            {addImage && (
              <Img src={URL.createObjectURL(addImage)} alt={addImage.name} />
            )}
          </Label>
        </button>
        <div>
          <p>Title</p>
          <InputText
            type="text"
            id="title"
            placeholder="Tilte..."
            {...register("title", {
              required: "This field is required",
            })}
          />
        </div>
        <StyledRange>
          <p>Rating</p>
          <input
            type="range"
            min={1}
            max={5}
            id="rating"
            defaultValue={1}
            className="range bg-slate-100 "
            step={step}
            {...register("rating", { required: "This field is required" })}
          />
          <div className="w-full flex justify-between  px-2">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </StyledRange>
        <div>
          <StyledGenre>
            {genre.map((items) => (
              <div key={items._id}>
                <input
                  type="checkbox"
                  name={items.title}
                  value={items.title}
                  id={items._id}
                  className="checkbox checkbox-secondery bg-white "
                  {...register("genre", {
                    required: "This field is required",
                  })}
                />

                <label htmlFor={items._id} className="text-2xl text-white p-2">
                  {items.title}
                </label>
              </div>
            ))}
          </StyledGenre>
        </div>
        <Button>Submit</Button>
      </Form>
    </Modal>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Input = styled.input`
  position: absolute;
  top: -1000px;
`;
const Img = styled.img`
  position: absolute;
  /* object-fit: contain; */
  width: 100%;
  height: 100%;
`;

const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 1px solid #cccccc;
  border-radius: 4px;
  width: 200px;
  height: 260px;
  margin: 20px;
  border: 1px solid rgba(238, 216, 192, 1);
  color: rgba(238, 216, 192, 1);
  color: rgba(238, 216, 192, 1);

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 120px;
    opacity: 0.2;
  }
`;

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
const StyledGenre = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  gap: 20px;
`;
