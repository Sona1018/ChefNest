import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/auth",
});

export const getAllUsers = () => API.get("/get");