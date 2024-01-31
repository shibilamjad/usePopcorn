// import axios from "axios";
// import { createContext, useContext, useState } from "react";
// import { useDebouncing } from "../hooks/useDebouncing";

// export const MovieContext = createContext();

// function MovieProvider({ children }) {
//   const [query, setQuery] = useState("");
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [selectedId, setSelectedId] = useState(null);
//   const [movieDetails, setMovieDetails] = useState([]);

//   let initialItem = "s";
//   function handleSelectedId(id) {
//     setSelectedId(id);
//   }
//   function handleClose() {
//     setSelectedId(null);
//   }

//   function handleChange(e) {
//     setQuery(e.target.value);
//   }
//   async function initialMovies() {
//     try {
//       setIsLoading(true);
//       setError("");
//       const res = await axios(`https://api.themoviedb.org/3/search/movie`, {
//         params: {
//           api_key: `d3449ff6ec0c027623bf6b6f5fff78b3`,
//           language: `en-US`,
//           page: 1,
//           include_adult: false,
//           query: initialItem,
//         },
//       });

//       const data = res.data;
//       setMovies(data.results);
//       if (data.results.length === 0) throw new Error("Movie not found ");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }
//   async function getSelectedMovie() {
//     try {
//       const res = await axios(`https://api.themoviedb.org/3/search/movie`, {
//         params: {
//           api_key: `d3449ff6ec0c027623bf6b6f5fff78b3`,
//           movie_id: selectedId,
//           language: `en-US`,
//           page: 1,
//           include_adult: false,
//         },
//       });

//       setMovieDetails(res.data);
//     } catch (err) {
//       setError(err.message);
//     }
//   }

//   async function fetchMovies() {
//     try {
//       setIsLoading(true);
//       setError("");
//       const res = await axios(`https://api.themoviedb.org/3/search/movie`, {
//         params: {
//           api_key: `d3449ff6ec0c027623bf6b6f5fff78b3`,
//           language: `en-US`,
//           page: 1,
//           include_adult: false,
//           query,
//         },
//       });

//       const data = res.data;
//       setMovies(data.results);
//       if (data.results.length === 0) throw new Error("Movie not found ");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   const searchQuery = useDebouncing(query, 300, initialMovies, fetchMovies);

//   return (
//     <MovieContext.Provider
//       value={{
//         query,
//         setQuery,
//         movies,
//         handleChange,
//         isLoading,
//         setMovies,
//         error,
//         movieDetails,
//         handleSelectedId,
//         selectedId,
//         handleClose,
//       }}
//     >
//       {children}
//     </MovieContext.Provider>
//   );
// }

// function useMovie() {
//   const context = useContext(MovieContext);
//   if (!context) {
//     throw new Error("useAuth must be used with a AuthProvider");
//   }
//   return context;
// }
// export { MovieProvider, useMovie };
