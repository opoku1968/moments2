import axios from "axios";

axios.defaults.baseURL = "https://backend-moments-053582d75bda.herokuapp.com/"
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

const axiosReq = axios.create();

// Add an interceptor to include the authentication token in the headers
axiosReq.interceptors.request.use((config) => {
  const authToken = localStorage.getItem('authToken');
  // console.log(authToken)
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

const axiosRes = axios.create();

export { axiosReq, axiosRes };
