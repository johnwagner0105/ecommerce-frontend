import React from "react";
import { createSaleServices } from "../../services/product_services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { isAdmin } from "../../services/user_services";
import { Navigate } from "react-router-dom";

export const Cart = () => {
  const cart = localStorage.getItem("cart");
  const cartParsed = cart ? JSON.parse(cart) : [];

  if (!isAdmin()) {
    alert("Debe iniciar sesión para comprar");
    return <Navigate to={"/login"} />;
  }
  const handleRemoveProduct = (productId) => {
    const updatedCart = cartParsed.filter(
      (product) => product.id !== productId
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const saleData = {
      details: cartParsed.map((product) => ({
        quantity: parseInt(product.quantity),
        products_id: product.id,
      })),
    };

    try {
      const response = await createSaleServices(saleData);
      if (!response) {
        alert("Error al crear la venta");
        return;
      }
      alert("Venta creada con éxito");
    } catch (error) {
      console.error("Error al crear la venta:", error);
      alert("Error al crear la venta");
    }
  };

  return (
    <div className="container">
      <h1>Cart</h1>
      <h2>Products in cart</h2>
      {cartParsed.length > 0 ? (
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartParsed.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
      <button className="btn btn-primary" onClick={handleSubmit}>
        Crear Venta
      </button>
    </div>
  );
};
