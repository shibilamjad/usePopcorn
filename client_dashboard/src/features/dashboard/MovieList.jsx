import styled from "styled-components";
import { device } from "../../ui/device";

export function MovieList() {
  return (
    <StyledCard className="card bg-indigo-800 shadow-xl ">
      <figure>
        <img
          src="https://marketplace.canva.com/EAFDOGkiqeA/1/0/566w/canva-green-brown-classic-action-adventure-movie-poster-6aDrK-XK3-U.jpg"
          alt="movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Avengers</h2>
        <div>
          <div className="badge badge-secondary">Heror</div>
          <div className="badge badge-secondary">action</div>
          <div className="badge badge-secondary">Heror</div>
        </div>
        <MovieDescription>sadsadasdcasd asdadsada sadaSd</MovieDescription>
        <p>⭐⭐⭐⭐</p>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  margin: 10px;
  width: 300px;
  height: 600px;
  transition: all 0.5;
  img {
    width: 400px;
    height: auto;
    object-fit: contain;
    @media ${device.laptopL} {
      width: 300px;
      height: auto;
      object-fit: contain;
      transition: all 0.5;
    }
    @media ${device.laptop} {
      width: 250px;
      height: auto;
      object-fit: contain;
      transition: all 0.5;
    }
    @media ${device.tablet} {
      width: 200px;
      height: 400px;
      object-fit: contain;
      transition: all 0.5;
    }
    @media ${device.mobileL} {
      width: auto;
      height: 400px;
      object-fit: contain;
      transition: all 0.5;
    }
    @media ${device.mobileS} {
      width: auto;
      height: 400px;
      object-fit: contain;
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
    width: auto;
    height: 400px;
    transition: all 0.5;
  }
`;
const MovieDescription = styled.p`
  font-size: 12px;
  color: #c5caff;
`;
