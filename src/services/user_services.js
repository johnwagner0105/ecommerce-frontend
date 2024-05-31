import { jwtDecode } from "jwt-decode";
import { API_URL } from "../helpers/constants";

export const getUserServices = async () => {
  try {
    const response = await fetch(`${API_URL}gestion/login`);
  } catch (error) {}
};

export const createUserServices = async (formData) => {
  const token = localStorage.getItem("accessToken");

  try {
    const response = await fetch(`${API_URL}gestion/createuser`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Failed to user");
    }
    return response.json();
  } catch (error) {
    console.error("Error creating user: ", error);
    throw error;
  }
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return false;
  }
  return true;
};

export const isAdmin = () => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return false;
  }
  const decodedToken = jwtDecode(token);
  return decodedToken.is_staff || false;
};
