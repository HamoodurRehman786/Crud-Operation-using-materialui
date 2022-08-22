import axios from "axios";

const usersUrl = "https://62ff3e3234344b6431f529fb.mockapi.io/crud";

export const getUsers = async (id) => {
  id = id || "";
  try {
    return await axios.get(`${usersUrl}/${id}`);
  } catch (error) {
    console.log("Error while calling getUsers api ", error);
  }
};

export const addUser = async (user) => {
  return await axios.post(`${usersUrl}`, user);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${usersUrl}/${id}`);
};

export const editUser = async (id, user) => {
  return await axios.put(`${usersUrl}/${id}`, user);
};
