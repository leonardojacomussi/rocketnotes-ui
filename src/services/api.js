import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-wy5t.onrender.com",
});