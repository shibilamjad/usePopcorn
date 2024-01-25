import { rating } from "@material-tailwind/react";
import axios from "axios";

const API_URL = "http://localhost:3006/api/movies";

export async function getMovies() {
  try {
    const res = await axios(`${API_URL}/genre`);
    const { data } = res;
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Movie could not be retrieved");
  }
}

export async function uploadMovieApi(data) {
  try {
    const formData = new FormData();
    formData.append("image", data.image[0]); // Assuming 'image' is a file input
    formData.append("title", data.title);
    formData.append("ratings", data.ratings);
    // formData.append("genre", data.genre);
    formData.append(
      "genre",
      Array.isArray(data.genre) ? data.genre.join(",") : data.genre
    );

    const res = await axios.post(`${API_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const dataResponse = res.data;
    return dataResponse;
  } catch (error) {
    console.error(error.message);
    throw new Error("Movie cloud not be created");
  }
}

export async function deleteMovieApi(_id) {
  try {
    const res = await axios(API_URL, {
      method: "DELETE",
      data: {
        _id,
      },
    });
    const { data } = res;
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Movie cloud not be deleted");
  }
}
