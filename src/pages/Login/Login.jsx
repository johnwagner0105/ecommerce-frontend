import React, { useState } from "react";
import { login } from "../../services/login";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
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
      localStorage.setItem("accessToken", response.access);
      const user = jwtDecode(response.access);
      alert("Usuario Loggeado");
      navigate("/");
      window.location.reload();
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} method="POST">
        <h1 className="mb-4">Iniciar Sesión</h1>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Correo Electrónico
          </label>
          <input
            type="text"
            name="correo"
            id="correo"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};
