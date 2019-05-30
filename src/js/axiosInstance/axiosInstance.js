import axios from "axios";

// append the baseURL
const axiosInstance = axios.create({
  baseURL: "https://my-json-server.typicode.com/magicmarie/json-data",
});
axiosInstance.defaults.headers.common['Content-Type'] = "application/json";

export default axiosInstance;
