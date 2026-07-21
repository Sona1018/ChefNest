import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/notification`,
});

export const getNotifications = () => API.get("/");

export const markAsRead = (id) =>
  API.put(`/${id}/read`);