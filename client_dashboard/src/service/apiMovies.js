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
    formData.append("image", data.image[0]);
    formData.append("title", data.title);
    formData.append("ratings", data.ratings);
    formData.append("genre", JSON.stringify(data.genre));

    const res = await axios.post(`${API_URL}/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (error) {
    console.error("Error uploading movie:", error.message);
    throw new Error(`Movie could not be created: ${error.message}`);
  }
}
export async function updateMovieApi(movieId, image, title, ratings, genre) {
  try {
    const formData = new FormData();
    formData.append("image", image[0]);
    formData.append("title", title);
    formData.append("ratings", ratings);
    formData.append("genre", JSON.stringify(genre));
    const res = await axios.put(`${API_URL}/updateMovie/${movieId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 409) {
      throw new Error("Movie title already exists");
    }

    throw new Error("Movie could not be created");
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
