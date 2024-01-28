import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMovies } from "../features/dashboard/useMovies";
import { Loader } from "../ui/Loader";

export const MovieUpdateContext = createContext();

function MovieUpdateProvider({ children }) {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  // const { movies, isLoading } = useMovies();
  //   const navigate = useNavigate();

  // function onEditMovie(movieId) {
  //   setIsEditing(true);
  //   setSelectedMovieId(movieId);
  //   // navigate(`/movie/${movieId}`);
  //   const selected = movies.find((item) => item.id === movieId);
  //   setSelectedMovie(selected);
  // }
  // if (isLoading) return <Loader />;

  return (
    <MovieUpdateContext.Provider
      value={{
        // onEditMovie,
        isEditing,
        selectedMovieId,
        setIsEditing,
        selectedMovie,
        setSelectedMovie,
        setSelectedMovieId,
      }}
    >
      {children}
    </MovieUpdateContext.Provider>
  );
}
function useMovieUpdateContext() {
  const context = useContext(MovieUpdateContext);
  if (!context) {
    throw new Error("useMovieUpdate must be used with a MovieUpdateProvider");
  }
  return context;
}
export { MovieUpdateProvider, useMovieUpdateContext };
