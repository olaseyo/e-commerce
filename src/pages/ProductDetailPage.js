import React from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Detail Page</h1>
      <ProductDetail productId={id} />
    </div>
  );
};

export default ProductDetailPage;
