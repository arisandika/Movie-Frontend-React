import axios from "axios";
import API_URL from "../utils/config";

export const register = async (data) => {
  const response = await axios.post(`${API_URL}/api/auth/register`, data);
  return response.data;
};

export const login = async (data) => {
  const response = await axios.post(`${API_URL}/api/auth/login`, data);
  return response.data;
};

export const loginWithGoogle = async () => {
  window.location.href = `${API_URL}/api/auth/google/redirect`;
};

export const fetchUserProfile = async (token) => {
  const response = await axios.get(`${API_URL}/api/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const logout = async () => {
  const token = localStorage.getItem("authToken");

  if (token) {
    try {
      await axios.post(
        `${API_URL}/api/auth/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("authToken");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }
};
