// src/services/userService.js
import axios from "axios";

// Fetch all users
export const viewUser = () => axios.get("/users");

// Add a new user
export const addUser = (user) => axios.post("/users", user); // Correct POST

// Update a user
export const updateUser = (id, user) => axios.put(`/users/${id}`, user);

// Delete a user
export const deleteUser = (id) => axios.delete(`/users/${id}`);
