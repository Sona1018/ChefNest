import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/booking",
});

export const getAllBookings = () => API.get("/get");

export const getBookingById = (id) => API.get(`/get/${id}`);

export const addBooking = (data) => API.post("/create", data);

export const updateBooking = (id, data) =>
  API.put(`/update/${id}`, data);

export const deleteBooking = (id) =>
  API.delete(`/delete/${id}`);