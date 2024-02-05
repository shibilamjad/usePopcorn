import { createContext, useContext, useState } from "react";

export const MovieUpdateContext = createContext();

function MovieUpdateProvider({ children }) {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [selectedWatchLater, setSelectedWatchLater] = useState([]);

  return (
    <MovieUpdateContext.Provider
      value={{
        selectedMovieId,
        selectedWatchLater,
        setSelectedWatchLater,
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
