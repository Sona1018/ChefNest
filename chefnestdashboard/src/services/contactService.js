import axios from "axios";

const API = axios.create({
 baseURL: `${process.env.REACT_APP_API_URL}/contact`,
});

export const getAllContacts = () => API.get("/get");

export const getContactById = (id) => API.get(`/get/${id}`);

export const addContact = (data) => API.post("/createContact", data);

export const updateContact = (id, data) =>
  API.put(`/update/${id}`, data);

export const deleteContact = (id) =>
  API.delete(`/delete/${id}`);