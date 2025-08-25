import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const APIToken = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    Authorization:
      localStorage.getItem("token") !== null ||
      localStorage.getItem("token") !== undefined ||
      localStorage.getItem("token") !== "" ? localStorage.getItem("token"):null,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export { API, APIToken };
