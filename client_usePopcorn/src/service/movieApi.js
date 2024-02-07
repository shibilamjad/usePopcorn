import axios from "axios";
import { PAGE_SIZE } from "../utils/PAGE_SIZE";

// Function to fetch all movies

export async function getMovies({ page = 1, limit, ratings = 0, genre = [] }) {
  try {
    const response = await axios(
      `http://localhost:3006/api/movies/all?page=${page}&limit=${PAGE_SIZE}&ratings=${ratings}&genre=${genre}`
    );

    const {
      movieList,
      pageCount,
      page: currentPage,
      genre: selectedGenre,
      ratings: selectedRatings,
    } = response.data;
    return {
      data: movieList,
      limit,
      pageCount,
      currentPage,
      genre: selectedGenre,
      ratings: selectedRatings,
    };
  } catch (error) {
    throw new Error(`Error fetching movies: ${error.message}`);
  }
}
