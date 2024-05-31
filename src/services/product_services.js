import { API_URL } from "../helpers/constants";

export const getProductServices = async () => {
  try {
    const response = await fetch(`${API_URL}gestion/listarproducto`);
    if (!response.ok) {
      return null;
    }
    return response.json();
  } catch (error) {
    return null;
  }
};

export const createProductServices = async (formData) => {
  const token = localStorage.getItem("accessToken");
  console.log(formData);
  try {
    const response = await fetch(`${API_URL}gestion/createproducto`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    if (!response.ok) {
      throw new Error("Failed to create product");
    }
    return response.json();
  } catch (error) {
    console.error("Error creating product: ", error);
    throw error;
  }
};

export const retrieveProductServices = async (id) => {
  try {
    const response = await fetch(`${API_URL}gestion/retrieveproduct/${id}`);
    if (!response.ok) {
      return null;
    }
    return response.json();
  } catch (error) {
    return null;
  }
};

export const createSaleServices = async (formData) => {
  const token = localStorage.getItem("accessToken");

  try {
    const response = await fetch(`${API_URL}gestion/createsale`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Failed to create sale");
    }
    return response.json();
  } catch (error) {
    console.error("Error creating product: ", error);
    throw error;
  }
};
