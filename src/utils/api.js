import axios from "axios";

const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;