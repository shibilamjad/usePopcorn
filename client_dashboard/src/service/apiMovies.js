import axios from "axios";

const API_URL = "http://localhost:3006/api/genres";

export async function createMovieApi(newGenre) {
  try {
    const res = await axios(API_URL, {
      method: "POST",
      data: {
        title: newGenre.genre,
      },
    });

    const { data } = res;
    return data;
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 409) {
      throw new Error("Genre title already exists");
    }

    if (newGenre.genre.length < 2) {
      throw new Error("Genre title must be at least 2 characters long.");
    }
    throw new Error("Genre could not be created");
  }
}

export async function getGenre() {
  try {
    const res = await axios("http://localhost:3006/api/genres");
    const { data } = res;
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
