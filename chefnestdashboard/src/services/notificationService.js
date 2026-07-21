import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/notification",
});

export const getNotifications = () => API.get("/");

export const markAsRead = (id) =>
  API.put(`/${id}/read`);