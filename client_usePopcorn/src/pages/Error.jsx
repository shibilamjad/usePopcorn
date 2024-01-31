import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export function Error() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <ErrotContainer>
      <div>
        <p>Page not found</p>
      </div>
      <div>
        <button onClick={handleClick}>&larr; Go Back to the Homepage</button>
      </div>
    </ErrotContainer>
  );
}
const ErrotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-blacklight);
  min-width: 20%;
  height: 50px;
  margin: 10% 30%;
  padding: 80px 50px;
  border-radius: 5px;
  p {
    color: var(--color-light);
    font-size: 14px;
  }
  button {
    background-color: var(--color-light);
    color: var(--color-black);
    border: transparent;
    padding: 5px 15px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
  }
`;
