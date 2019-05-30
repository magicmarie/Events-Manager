import axios from "axios";

// append the baseURL
const axiosInstance = axios.create({
  baseURL: "https://my-json-server.typicode.com/magicmarie/json-data",
});

export default axiosInstance;
