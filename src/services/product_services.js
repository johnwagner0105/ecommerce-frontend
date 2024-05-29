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
