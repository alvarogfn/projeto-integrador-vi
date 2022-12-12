import axios from "axios";

export const api = axios.create({
  baseURL: "https://projeto-integrador-backend.onrender.com/",
});
