import axios from "axios";

const api = axios.create({
  // Hier wird die BaseURL für das Mock Backend definiert
  baseURL: "http://localhost:8080/"
});

api.interceptors.request.use(
  request => {
    const token = localStorage.getItem("token");
    if (token) {
      request.headers.Authorization = token;
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;