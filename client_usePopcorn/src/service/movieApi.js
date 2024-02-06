import axios from "axios";
import { PAGE_SIZE } from "../utils/PAGE_SIZE";

export async function getMovies({ page, limit }) {
  try {
    const response = await axios.get(
      `http://localhost:3006/api/movies/all?page=${page}&limit=${PAGE_SIZE}`
    );
    const { movieList, error, pageCount, page: pages } = response.data;

    if (error) {
      console.error(error);
      throw new Error("Movies could not be loaded");
    }

    let data = movieList;
    return { data, limit, pages, pageCount };
  } catch (error) {
    throw new Error(`Error fetching movies: ${error.message}`);
  }
}

export async function getFilterMovies({ page, ratings, genre, limit }) {
  try {
    const response = await axios.post(
      `http://localhost:3006/api/movies/filter-genre?page=${page}&limit=${limit}`,
      {
        ratings: ratings || 0,
        genre: genre || [],
      }
    );

    const { movieList, error, pageCount, page: pages } = response.data;

    if (error) {
      console.error(error);
      throw new Error("Movies could not be loaded");
    }
    const movies = await getMovies({ page, limit });

    return {
      data: movies.data,
      limit: movies.limit,
      pages: movies.pages,
      pageCount: movies.pageCount,
    };
  } catch (error) {
    throw new Error(`Error fetching filtered movies: ${error.message}`);
  }
}
// export async function getFilterMovies({ page, ratings, genre, limit }) {
//   try {
//     const response = await axios.post(
//       `http://localhost:3006/api/movies/filter-genre?page=${page}&limit=${limit}`,
//       {
//         ratings: ratings || 0,
//         genre: genre || [],
//       }
//     );

//     const { movieList, error, pageCount, page: pages } = response.data;

//     if (error) {
//       console.error(error);
//       throw new Error("Movies could not be loaded");
//     }

//     return { data: movieList, limit, pages, pageCount };
//   } catch (error) {
//     throw new Error(`Error fetching filtered movies: ${error.message}`);
//   }
// }
