import React, { useEffect, useState } from "react";
import { getProductServices } from "../../services/product_services";
import { ProductCard } from "./ProductCard";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductServices().then((data) => {
      if (!data) {
        alert("Ha ocurrido un error al cargar los productos");
        return;
      }
      setProducts(data);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4 mb-3">Products</h1>
      <div className="row">
        {products.length > 0 ? (
          products
            .filter((product) => product.status)
            .map((filteredProduct) => (
              <div key={filteredProduct.id} className="col-md-4 mb-4">
                <ProductCard data={filteredProduct} />
              </div>
            ))
        ) : (
          <div className="col">
            <p className="text-center">No hay productos disponibles</p>
          </div>
        )}
      </div>
    </div>
  );
};
