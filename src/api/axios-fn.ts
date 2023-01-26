import axios from "axios";

const baseURL = "http://localhost:5000";
const headers = {
  //   "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

export const axiosInstance = axios.create({
  baseURL,
  headers,
});

export const getGis = async () => {
  return axiosInstance
    .get("/gis")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      alert(error.message);
    });
};
// authAxios.interceptors.request.use((config) => {
//   const accessToken = getLocalStorageToken();
//   if (accessToken && config.headers) {
//     config.headers['Authorization'] = `Bearer ${accessToken}`;
//   }
//   return config;
// });
