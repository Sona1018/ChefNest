import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/booking`,
});

export const getAllBookings = () => API.get("/get");

export const getBookingById = (id) => API.get(`/get/${id}`);

export const addBooking = (data) => API.post("/create", data);

export const updateBooking = (id, data) =>
  API.put(`/update/${id}`, data);

export const deleteBooking = (id) =>
  API.delete(`/delete/${id}`);