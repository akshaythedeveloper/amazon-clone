import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import "./ProductCategory.css";
import Products from "./Products";
import { useStateValue } from "./StateProvider";

function ProductCategory({ title, image }) {
  const [{ productTitle }, dispatch] = useStateValue();

  const setProductTitle = () => {
    dispatch({
      type: "SET_PRODUCT_TITLE",
      productTitle: title,
    });
  };
  return (
    <div className="productCategory">
      {/* Example of using Dynamic URL's */}
      <Link to={`./products/${title}`}>
        <img
          src={image}
          className="productCategory__image"
          onClick={setProductTitle}
        />
      </Link>
      <h1 className="productCategory__title">{title}</h1>
    </div>
  );
}

export default ProductCategory;
