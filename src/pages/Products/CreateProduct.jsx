import { useState } from "react";
import React from "react";
import { createProductServices } from "../../services/product_services";
import { isAdmin } from "../../services/user_services";
import { Navigate } from "react-router-dom";

export const CreateProduct = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    description: "",
    image: null,
    price: "",
    stock: "",
  });

  if (!isAdmin()) {
    return <Navigate to={"/"} />;
  }

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.currentTarget;
    if (type === "file") {
      setCredentials({
        ...credentials,
        [name]: files[0],
      });
    } else {
      setCredentials({
        ...credentials,
        [name]: type === "number" ? parseInt(value) : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const [key, value] of Object.entries(credentials)) {
      formData.append(key, value);
    }
    try {
      const response = await createProductServices(formData);
      if (!response) {
        alert("Error al crear el producto");
        return;
      }
      alert("Producto creado exitosamente");
    } catch (error) {
      console.error("Error al crear el producto:", error);
      alert("Error al crear el producto");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} method="POST">
        <h1>Crear Producto</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descripción:
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Imagen:
          </label>
          <input
            type="file"
            name="image"
            id="image"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Precio:
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock:
          </label>
          <input
            type="number"
            name="stock"
            id="stock"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Crear Producto
        </button>
      </form>
    </div>
  );
};
