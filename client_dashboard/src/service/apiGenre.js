import axios from "axios";

const API_URL = "http://localhost:3006/api/genres";

export async function getGenre() {
  try {
    const res = await axios(API_URL);
    const { data } = res;
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
