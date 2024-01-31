import styled from "styled-components";
import { device } from "../../ui/device";
import { useMovies } from "./useMovies";
import { Loading } from "../../ui/Loading";
import { ErrorMessage } from "../../ui/ErrorMessage";
import ReactStars from "react-rating-stars-component";
import { FaBookmark } from "react-icons/fa";
import { PAGE_SIZE } from "../../utils/PAGE_SIZE";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
export function MoviesList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    pageCount: totalPage,
    movies,
    limit,
    isLoading,
    error,
    setPage,
    page: currentPage,
  } = useMovies();

  const page = Number(searchParams.get("page")) || 1;
  const pageCount = Math.ceil(limit / PAGE_SIZE);

  function nextPage() {
    if (currentPage < totalPage) {
      setPage((prev) => prev + 1);
      setSearchParams({ page: currentPage + 1 });
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setPage((prev) => prev - 1);
      setSearchParams({ page: currentPage - 1 });
    }
  }

  if (pageCount <= 1) return null;
  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage />;
  console.log(movies);

  return (
    <>
      <StyledMovieList>
        {movies.map((movie) => (
          <Box key={movie._id}>
            <StyledCard>
              <StledContainer>
                <div>
                  <Img src={movie.image} alt={movie.title} />
                </div>
                <StyledContent>
                  <h2 className="card-title">{movie.title}</h2>
                  <StyledGenre>
                    {movie.genre &&
                      movie.genre.map((genre) => (
                        <Genre key={genre._id}>{genre.title}</Genre>
                      ))}
                  </StyledGenre>
                  <ReactStars
                    count={5}
                    size={24}
                    value={movie.ratings}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <StyledButton>
                    <AddButton>
                      <FaBookmark />
                    </AddButton>
                  </StyledButton>
                </StyledContent>
              </StledContainer>
            </StyledCard>
          </Box>
        ))}
      </StyledMovieList>
      <StyledPagination>
        <p>
          Showing <span>{(page - 1) * PAGE_SIZE + 1} </span>
          <span>to </span>
          <span>
            {page === totalPage
              ? (page - 1) * PAGE_SIZE + movies.length
              : currentPage * PAGE_SIZE}{" "}
          </span>
          results
        </p>
        <Buttons>
          <PaginationButton onClick={prevPage} disabled={1 === currentPage}>
            <HiChevronLeft />
            <span>Previous</span>
          </PaginationButton>
          <PaginationButton onClick={nextPage} disabled={page === totalPage}>
            <span>Next</span>
            <HiChevronRight />
          </PaginationButton>
        </Buttons>
      </StyledPagination>
    </>
  );
}
const StyledMovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-bottom: 10px;
`;

const Box = styled.div`
  width: 400px;
  background-color: #3730a3;
  border-radius: 10px;

  @media ${device.laptopL} {
    width: 400px;
    transition: all 0.5;
  }
  @media ${device.laptop} {
    width: 400px;

    transition: all 0.5;
  }
  @media ${device.tablet} {
    width: 400px;

    transition: all 0.5;
  }
  @media ${device.mobileL} {
    width: 260px;
    /* height: 100%; */
    transition: all 0.5;
  }
  @media ${device.mobileS} {
    width: 260px;
    /* height: 100%; */
    transition: all 0.5;
  }
`;

const StyledCard = styled.div`
  width: 100%;
  height: 290px;
  border-radius: 10px;
  transition: all 0.5s;
  img {
    width: 100%;
    height: 290px;
    border-radius: 10px 0 0 10px;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const StledContainer = styled.div`
  display: grid;
  border-radius: 10px;
  grid-template-columns: 1fr 1fr;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* align-items: start; */
  justify-content: space-between;
  gap: 10px;
  /* margin-top: 20px; */
`;

const StyledGenre = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: start;
`;
const Genre = styled.div`
  background-color: #ff00d3;
  border-radius: 10px;
  padding: 6px;
`;

const StyledButton = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
  gap: 20px;
  font-size: 20px;
`;
const AddButton = styled.button`
  padding: 5px;
  border-radius: 4px;
  background-color: #3730a3;
  color: #fff;
  border: transparent;

  &:focus,
  &:hover {
    background-color: #fff;
    color: #3730a3;
    transition: background-color 0.5s ease;
  }
`;

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 40px;

  @media ${device.tablet} {
    padding: 0.4rem 0.9rem;
    font-size: 1rem;
    transition: all 0.5;
  }
  @media ${device.mobileL} {
    padding: 0.2rem 0.4rem;
    font-size: 0.8rem;
    transition: all 0.5;
  }
  @media ${device.mobileS} {
    padding: 0.2rem 0.8rem;
    transition: all 0.5;
    font-size: 0.8rem;
  }
  p {
    color: var(--color-description);
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${(props) => (props.active ? "#3730a3;" : "#3730a3;")};
  color: ${(props) => (props.active ? " var(--color-light)" : "inherit")};
  border: 1px solid ${(props) => (props.active ? "#3730a3;" : "#3730a3;")};
  border-radius: 5px;
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;
  &:disabled {
    cursor: not-allowed;
    background-color: #3730a3;
    color: #b0b0b0;
    opacity: 0.3;
  }
  @media ${device.laptopL} {
    padding: 0.6rem 1.2rem;
    transition: all 0.5;
  }
  @media ${device.laptop} {
    padding: 0.6rem 1.2rem;
    transition: all 0.5;
  }
  @media ${device.tablet} {
    padding: 0.4rem 0.9rem;
    font-size: 1.2rem;
    transition: all 0.5;
  }
  @media ${device.mobileL} {
    padding: 0.2rem 0.4rem;
    font-size: 0.8rem;
    transition: all 0.5;
  }
  @media ${device.mobileS} {
    padding: 0.2rem 0.8rem;
    transition: all 0.5;
    font-size: 0.8rem;
  }

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: #fff;
    color: #3730a3;
  }
`;
