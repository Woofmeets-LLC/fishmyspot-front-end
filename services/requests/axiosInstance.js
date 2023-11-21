import axios from "axios";

const baseURL = "https://be.fishmyspot.com/";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
