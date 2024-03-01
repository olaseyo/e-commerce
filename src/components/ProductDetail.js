import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow rounded-md">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
