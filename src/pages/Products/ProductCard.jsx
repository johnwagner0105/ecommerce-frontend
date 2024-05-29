import React from "react";

export const ProductCard = ({ data }) => {
  return (
    <div className="card h-100">
      <img src={data.image} className="card-img-top" />
      <div className="card-body">
        <div className="card-title">{data.name}</div>
        <div className="card-text">{data.price}</div>
      </div>
    </div>
  );
};
