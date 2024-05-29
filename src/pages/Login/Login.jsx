import React, { useState } from "react";
import { login } from "../../services/login";

export const Login = () => {
  const [credentials, setCredentials] = useState({
    correo: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login(credentials).then((response) => {
      if (!response) {
        alert("Usuario o contraseña incorrectas");
        return;
      }
      console.log(response.access);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Ingrese sus credenciales</h1>
        <label htmlFor="correo">Email</label>
        <input
          type="text"
          name="correo"
          id="correo"
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInputChange}
        />
        <button type="submit">Iniciar Sesion</button>
      </form>
    </div>
  );
};
