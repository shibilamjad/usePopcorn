import styled from "styled-components";

import SortBy from "./SortBy";
import { device } from "./device";
import { useGenre } from "../components/HomePage/useGenre";

export function MovieFilterGenre() {
  const { genre } = useGenre();

  return (
    <TableOperations>
      <div>
        {genre && (
          <SortBy
            options={[
              { value: "", label: "Select Genre" }, // Default option
              ...genre.map((item) => ({
                value: item.title,
                label: item.title,
              })),
            ]}
          />
        )}
      </div>
      <StyledRating>
        <SortBy
          options={[
            { value: "default", label: "Selecte ratings" },
            { value: "5", label: "5" },
            {
              value: "4",
              label: "4",
            },
            { value: "3", label: "3" },
            { value: "2", label: "2" },
            { value: "1", label: "1" },
          ]}
        />
      </StyledRating>
    </TableOperations>
  );
}

const TableOperations = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  margin-right: 370px;
  gap: 1.6rem;
  @media ${device.laptopL} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: 1px;
  }
  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
  }
  @media ${device.mobileL} {
    display: flex;
    flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-right: 0px;
  }
`;

const Button = styled.button`
  display: flex;
  padding: 10px;
  font-size: 14px;
  border-radius: 10px;
  /* margin-right: 20px; */
  border: transparent;
  color: #fff;
  background-color: #3730a3;
`;
const StyledRating = styled.div`
  display: flex;
  align-items: center;
`;
