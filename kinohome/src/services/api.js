import axios from "axios";

export default axios.create({
  baseURL: "https://api.kinopoisk.dev/v1.4/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY_MOVIE}`,
  },
});