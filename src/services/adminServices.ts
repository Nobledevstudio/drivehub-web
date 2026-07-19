// services/adminService.js
import type { User } from "../pages/admin/Users";
import { api } from "./api";

export const getDashboardStats = async () => {
  const response = await api.get("/admin/stats");
  return response.data.data;
};

export const getCarStatus = async () => {
  const response = await api.get("/admin/car-status");
  return response.data.data;
};

export const getRecentActivties = async () => {
  const response = await api.get("/admin/recent");
  return response.data.data;
};


export const getRecentCars = async () => {
  const response = await api.get("/admin/recent-cars");
  return response.data;
};

export const getUsersStats = async () => {
  const response = await api.get("/admin/users/stats");
  return response.data;
};

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get("/admin/users");
  return response.data.users;
};

export const getCarsStats = async () => {
  const response = await api.get("/admin/cars/stats");
  return response.data.data;
};
export const getAllCars = async () => {
  const response = await api.get("/admin/cars");
  return response.data.data;
};

