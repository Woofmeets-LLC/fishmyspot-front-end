import axios from "axios";

const baseURL = "https://api.fishmyspot.com/";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
