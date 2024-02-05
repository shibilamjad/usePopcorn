import axios from "axios";
const API_URL = "http://localhost:3006/api/users";

export async function watchLaterApi() {
  const userId = localStorage.getItem("token");
  try {
    const res = await axios(`${API_URL}/watchLater`, {
      headers: {
        accesstoken: userId,
      },
    });

    return res.data.watchLater; // or any data you want to return on success
  } catch (error) {
    throw new Error(`Error fetching createUser: ${error.message}`);
  }
}

export async function addWatchLaterApi(movieId) {
  const userId = localStorage.getItem("token");
  try {
    const res = await axios.put(
      `${API_URL}/addWatchLater`,
      { movieId },
      {
        headers: {
          accesstoken: userId,
        },
      }
    );

    if (res.data.success) {
      return res.data; // or any data you want to return on success
    } else {
      throw new Error(`Error: ${res.data.message}`);
    }
  } catch (error) {
    throw new Error(`Error fetching addWatchList: ${error.message}`);
  }
}
export async function deleateWatchLaterApi(movieId) {
  const userId = localStorage.getItem("token");
  try {
    const res = await axios.delete(
      `${API_URL}/deleteWatchLater`,

      {
        data: { movieId },
        headers: {
          accesstoken: userId,
        },
      }
    );

    return res.data;
  } catch (error) {
    throw new Error(`Error deleting watchList: ${error.message}`);
  }
}
