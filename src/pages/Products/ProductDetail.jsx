import { jwtDecode } from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { retrieveProductServices } from "../../services/product_services";
import { isAdmin } from "../../services/user_services";

export const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  let decodedToken = false;

  useEffect(() => {
    retrieveProductServices(id).then((data) => {
      if (!data) {
        alert("Ha ocurrido un error al cargar el producto");
        return;
      }
      setProduct(data);
    });
  }, [id]);

  const handleInputChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    if (!product) return;

    const cart = localStorage.getItem("cart") || "[]";
    const cartParsed = JSON.parse(cart);

    const productInCartIndex = cartParsed.findIndex(
      (item) => item.id === product.id
    );

    if (productInCartIndex !== -1) {
      const updatedCart = cartParsed.map((item, index) => {
        if (index === productInCartIndex) {
          return {
            ...item,
            quantity: item.quantity + quantity,
            subtotal:
              parseFloat(item.subtotal) + parseFloat(item.price * quantity),
          };
        }
        return item;
      });

      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const newProduct = {
        ...product,
        quantity: quantity,
        subtotal: parseFloat(product.price) * quantity,
      };

      localStorage.setItem("cart", JSON.stringify([...cartParsed, newProduct]));
    }
  };

  const handleDeleteProduct = () => {};

  return (
    <div className="container my-4">
      {product && (
        <div className="row">
          <div className="col-md-6">
            <h1>
              {product.name}
              {isAdmin() && (
                <span className="ms-2">
                  <FontAwesomeIcon icon={faEdit} />
                </span>
              )}
              {isAdmin() && (
                <span className="ms-2">
                  <FontAwesomeIcon
                    icon={faTimes}
                    onClick={handleDeleteProduct}
                  />
                </span>
              )}
            </h1>
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid mb-3"
            />
          </div>
          <div className="col-md-6">
            <h3>Precio: ${product.price}</h3>
            <label htmlFor="quantity" className="form-label mt-3">
              Cantidad:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={handleInputChange}
              className="form-control mb-3"
              min="1"
              step="1"
            />
            <button onClick={handleAddToCart} className="btn btn-primary">
              Agregar al carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
