import styled from "styled-components";

import { device } from "./device";
import { useGenre } from "../components/HomePage/useGenre";
import { useMovies } from "../components/HomePage/useMovies";
import { Loading } from "./Loading";
import { ErrorMessage } from "./ErrorMessage";
import { Empty } from "./Empty";
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const ratingValue = [
  { value: 5, label: "5 > 1" },
  { value: 4, label: "4 > 1" },
  { value: 3, label: "3 > 1" },
  { value: 2, label: "2 > 1" },
  { value: 1, label: "1" },
];

export function MovieFilterGenre() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [ratingsValues, setRatingsValues] = useState(ratingValue);
  const { genre } = useGenre();
  const prevRatingsRef = useRef();

  const { isLoading, error, genre: genres, movies, ratings } = useMovies();

  const genreValue = searchParams.get("genre") || "all";
  const ratingValues = searchParams.get("ratings") || "";

  function handleGenreFilter(event) {
    const selectedGenre = event.target.value;
    setSearchParams({ ...searchParams, genre: selectedGenre });
  }
  function handleRatingFilter(event) {
    const selectedRatings = event.target.value;
    setSearchParams({
      ...searchParams,
      ratings: selectedRatings,
    });
  }
  useEffect(() => {
    prevRatingsRef.current = ratings;
  }, [ratings]);

  if (movies.length === 0) return <Empty>Movies not available</Empty>;
  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage />;
  return (
    <TableOperations>
      <StyledDiv>
        {genre && (
          <Selects onChange={handleGenreFilter} value={genreValue}>
            <option value="all">Select Genre</option>
            {genre.map((item) => (
              <option key={item._id} value={item.title}>
                {item.title}
              </option>
            ))}
          </Selects>
        )}
      </StyledDiv>
      <StyledDiv>
        {ratingsValues && (
          <Selects onChange={handleRatingFilter} value={ratingValues}>
            <option value="">Select ratings</option>
            {ratingsValues.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </Selects>
        )}
      </StyledDiv>
    </TableOperations>
  );
}
const Selects = styled.select`
  padding: 10px;
  background-color: #3730a3;
  width: 200px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  border-radius: 10px;
  option {
    color: #3730a3;
    padding: 10px;
    margin: 10px;
    background-color: #fff;
  }
`;

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
