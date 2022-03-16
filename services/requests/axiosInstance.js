import axios from 'axios';

const baseURL = 'https://fish-backend.algosolver.com/';

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
