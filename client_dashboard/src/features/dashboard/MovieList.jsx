import styled from "styled-components";
import { device } from "../../ui/device";
import { useMovies } from "./useMovies";
import { HiPencil, HiTrash } from "react-icons/hi2";
import { Loader } from "../../ui/Loader";
import { useDeleteMovie } from "./useMovieDelete";
import { Empty } from "../../ui/Empty";

export function MovieList() {
  const { movies, isLoading } = useMovies();
  const { deleteMovie } = useDeleteMovie();
  console.log(movies);
  if (isLoading) return <Loader />;

  if (movies.length === 0) return <Empty>Please upload movies</Empty>;
  return (
    <>
      {movies.map((movie) => (
        <StyledCard key={movie._id} className="card bg-indigo-800 shadow-xl ">
          <figure>
            <img src={movie.image} alt={movie.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{movie.title}</h2>
            <div>
              {movie.genre &&
                movie.genre.map((genre) => (
                  <div key={genre._id} className="badge badge-secondary">
                    {genre.title}
                  </div>
                ))}
            </div>
            <p>⭐⭐⭐⭐</p>
            <StyledButton>
              <button>
                <HiPencil />
              </button>
              <button onClick={() => deleteMovie(movie._id)}>
                <HiTrash />
              </button>
            </StyledButton>
          </div>
          <div></div>
        </StyledCard>
      ))}
    </>
  );
}

const StyledCard = styled.div`
  margin: 10px;
  width: 300px;
  height: 600px;
  transition: all 0.5;
  img {
    width: 400px;
    height: 500px;

    @media ${device.laptopL} {
      width: 300px;
      height: 500px;

      transition: all 0.5;
    }
    @media ${device.laptop} {
      width: 250px;
      height: 500px;
      transition: all 0.5;
    }
    @media ${device.tablet} {
      width: 200px;
      height: 400px;

      transition: all 0.5;
    }
    @media ${device.mobileL} {
      width: auto;
      height: 400px;

      transition: all 0.5;
    }
    @media ${device.mobileS} {
      width: auto;
      height: 400px;

      transition: all 0.5;
    }
  }
  @media ${device.laptopL} {
    width: 300px;
    height: 600px;
    transition: all 0.5;
  }
  @media ${device.laptop} {
    width: 250px;
    height: 500px;
    transition: all 0.5;
  }
  @media ${device.tablet} {
    width: 200px;
    height: 400px;
    transition: all 0.5;
  }
  @media ${device.mobileL} {
    width: auto;
    height: 400px;
    transition: all 0.5;
  }
  @media ${device.mobileS} {
    width: 400px;
    height: 400px;
    transition: all 0.5;
  }
`;

const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  font-size: 20px;
`;
