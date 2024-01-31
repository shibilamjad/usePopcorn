import axios from "axios";
import { PAGE_SIZE } from "../utils/PAGE_SIZE";

const API_URL = "http://localhost:3006/api/movies/all";

export async function getMovies({ page, limit }) {
  try {
    const response = await axios.get(
      `http://localhost:3006/api/movies/all?page=${page}&limit=${PAGE_SIZE}`
    );
    const { movieList, error, pageCount, page: pages } = response.data;
    console.log(movieList);

    if (error) {
      console.error(error);
      throw new Error("Movies could not be loaded");
    }

    let data = movieList;

    // if (page) {
    //   const from = (page - 1) * PAGE_SIZE;
    //   const to = from + PAGE_SIZE;
    //   // data = data.slice(from, to);
    // }

    return { data, limit, pages, pageCount };
  } catch (error) {
    throw new Error(`Error fetching movies: ${error.message}`);
  }
}
