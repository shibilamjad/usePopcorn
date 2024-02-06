import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import { motion } from "framer-motion";

import { device } from "../../ui/device";
import { fadeInVariants } from "../../ui/variation";
import { useWatchLater } from "./useWatchLater";
import { Loading } from "../../ui/Loading";
import { Model } from "../../ui/Model";
import { Box } from "../../ui/Box";
import { Link } from "react-router-dom";
import { HiTrash } from "react-icons/hi2";
import { useDeleteWatchLater } from "./useDeleteWatchList";
import { Empty } from "../../ui/Empty";

export function WatchLater() {
  const { isLoading, watchLater } = useWatchLater();
  const { deleateWatch } = useDeleteWatchLater();

  function handleAddWatchLater(movieId) {
    try {
      deleateWatch(movieId);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(watchLater);
  if (isLoading) return <Loading />;
  if (watchLater.length === 0) return <Empty>Empty :(</Empty>;
  return (
    <>
      <motion.div
        variants={fadeInVariants("up")}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <P>
          <NavLink to="/">Home</NavLink>
          <span>/WatchLater</span>
        </P>

        <Model>
          {watchLater.map((movie) => (
            <Box key={movie._id}>
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
                  <AddButton onClick={() => handleAddWatchLater(movie._id)}>
                    <HiTrash />
                  </AddButton>
                </StyledButton>
              </StyledContent>
            </Box>
          ))}
        </Model>
      </motion.div>
    </>
  );
}

const NavLink = styled(Link)`
  color: var(--color-h1);
  font-weight: 500;
`;
const P = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #b3b3b3;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
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

  svg {
    height: 30px;
    width: 30px;
  }
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
