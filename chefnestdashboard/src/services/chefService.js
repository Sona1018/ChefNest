import axios from "axios";

const API = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/chef`,
});

export const getAllChefs = async () => {
  return await API.get("/get");
};

export const addChef = async (chefData) => {
  return await API.post("/create", chefData);
};

export const updateChef = async (id, chefData) => {
  return await API.put(`/update/${id}`, chefData);
};

export const deleteChef = async (id) => {
  return await API.delete(`/delete/${id}`);
};

export default API;