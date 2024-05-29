import React, { useEffect, useState } from "react";
import { getProductServices } from "../../services/product_services";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductServices().then((data) => {
      if (!data) {
        alert("Ha ocurrido un error");
        return;
      }
      setProducts(data);
      // console.log(data);
    });
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <div className="container">
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <ProductCard data={product} />
              </div>
            ))
          ) : (
            <p>No hay productos</p>
          )}
        </div>
      </div>
    </div>
  );
};
