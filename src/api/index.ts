import axios from "axios";

export const PublicAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
