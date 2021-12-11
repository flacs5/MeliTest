import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/api/",
  headers: { Pragma: "no-cache" },
});

export default instance;
