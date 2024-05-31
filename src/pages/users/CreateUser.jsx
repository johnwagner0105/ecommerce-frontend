import React, { useState } from "react";
import { createUserServices, isAdmin } from "../../services/user_services";
import { Navigate } from "react-router-dom";

export const CreateUser = () => {
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserServices(user);
      if (!response) {
        throw new Error("Failed to create user");
      }
      alert("User created successfully");
    } catch (error) {
      console.error("Error creating user: ", error);
      alert("Failed to create user");
    }
  };

  return (
    <div className="container">
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            className="form-control"
            value={user.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido:
          </label>
          <input
            type="text"
            name="apellido"
            id="apellido"
            className="form-control"
            value={user.apellido}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Correo:
          </label>
          <input
            type="text"
            name="correo"
            id="correo"
            className="form-control"
            value={user.correo}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Crear Usuario
        </button>
      </form>
    </div>
  );
};
