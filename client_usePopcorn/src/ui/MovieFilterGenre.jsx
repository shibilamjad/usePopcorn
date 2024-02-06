import styled from "styled-components";

import SortBy from "./SortBy";
import { device } from "./device";
import { useGenre } from "../components/HomePage/useGenre";
import { FilterRatings } from "./FilterRatings";
import { PAGE_SIZE } from "../utils/PAGE_SIZE";
import { useFilter } from "../components/HomePage/usefilter";
import { useEffect } from "react";

export function MovieFilterGenre() {
  const { genre } = useGenre();
  const { filter } = useFilter();

  function handleGenreFilter(selectedOptions = []) {
    const selectedGenres = selectedOptions.map((option) => option.value);
    filter({ page: 1, limit: PAGE_SIZE, genre: selectedGenres });
  }

  function handleRatingFilter(ratings) {
    filter({ page: 1, limit: PAGE_SIZE, ratings });
  }

  useEffect(() => {
    // Fetch filtered movies when the component mounts
    filter();
  }, [filter]);

  return (
    <TableOperations>
      <StyledDiv>
        <span>Select Genre: </span>
        {genre && (
          <SortBy
            options={genre.map((item) => ({
              value: item.title,
              label: item.title,
            }))}
            handleGenreFilter={handleGenreFilter}
          />
        )}
      </StyledDiv>
      <StyledDiv>
        <span>Rating: </span>
        <FilterRatings
          options={[
            { value: "5", label: "5" },
            { value: "4", label: "4" },
            { value: "3", label: "3" },
            { value: "2", label: "2" },
            { value: "1", label: "1" },
          ]}
          handleRatingFilter={handleRatingFilter}
        />
      </StyledDiv>
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
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  color: #3730a3;
  gap: 10px;
  font-size: 20px;
  span {
    color: var(--color-h1);
  }
`;
