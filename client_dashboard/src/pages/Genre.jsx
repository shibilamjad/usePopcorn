import styled from "styled-components";
import Modal from "../ui/Modal";
import { device } from "../ui/device";
import { useQuery } from "@tanstack/react-query";
import { getGenre } from "../service/apiGenre";
import { Loader } from "../ui/Loader";
// import Error from "../ui/Error";

export function Genre() {
  const {
    data: genre,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["genre"],
    queryFn: getGenre,
  });
  console.log(genre);
  console.log(error);
  if (isLoading) return <Loader />;
  // if (error) return <Error />;

  return (
    <Modal>
      <h1 className="p-2 text-2xl">Edit / Create Genre</h1>
      <StyledInput>
        <div>
          <InputText type="text" placeholder="Create genre" />
        </div>
        <div>
          <Button>Add</Button>
        </div>
      </StyledInput>
      <StyledBox>
        {genre.map((items) => (
          <Box key={items._id}>
            <StyledGenre>{items.title}</StyledGenre>
            <StyledButton>
              <button>Edit</button>
              <button>delete</button>
            </StyledButton>
          </Box>
        ))}
      </StyledBox>
    </Modal>
  );
}

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
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
    width: 250px;
    height: auto;
  }
  @media ${device.mobileL} {
    width: 150px;
    height: auto;
  }
  @media ${device.mobileS} {
    width: 150px;
    height: auto;
  }
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  background-color: #fff;
  color: #3730a3;
  padding: 5px 10px;
  border: 1px solid #3730a3;
  border-radius: 4px;
  &:hover,
  &:focus {
    background-color: #3730a3;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    transition: background-color 0.5s ease;
  }
`;
const StyledBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100px;
  border: 1px solid #fff;
  height: 100px;
`;
const StyledGenre = styled.div`
  border-bottom: 2px solid #fff;
  font-size: 20px;
  font-weight: 600;
`;
const StyledButton = styled.div`
  display: flex;
  gap: 10px;
`;
