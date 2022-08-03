import axios from "axios";
const URL = "http://localhost:8080/"

const api = axios.create({
  baseURL: URL,
});

export default api;