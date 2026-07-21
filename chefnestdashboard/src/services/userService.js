import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/auth`,
});

export const getAllUsers = () => API.get("/get");