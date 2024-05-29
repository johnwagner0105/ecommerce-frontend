import { API_URL } from "../helpers/constants";

import React from "react";

export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}gestion/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/JSON",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      return null;
    }

    return response.json();
  } catch (error) {
    return null;
  }
};
