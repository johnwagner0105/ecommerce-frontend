import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ data }) => {
  return (
    <div className="card h-100">
      <Link to={`/viewproduct/${data.id}`}>
        <img src={data.image} className="card-img-top" alt={data.name} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">${data.price}</p>
        <Link to={`/viewproduct/${data.id}`} className="btn btn-primary">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};
