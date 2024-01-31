import styled from "styled-components";

export function ErrorMessage({ message }) {
  return <ErrorContainer>{message}</ErrorContainer>;
}

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
  background-color: blackf;
  background-color: rgba(0, 0, 0, 0.8);

  padding: 50px;
  border-radius: 10px;
`;
