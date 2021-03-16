import React from "react";
import Product from "./Product";
import "./Products.css";
import database from "./Database";
import { useStateValue } from "./StateProvider";

function Products() {
  const [{ productTitle }, dispatch] = useStateValue();
  console.log(Object.keys(database));

  return (
    <div className="products">
      <h1 className="products__category">{productTitle}</h1>
      <div className="products__container">
        {database[productTitle]?.map((item) => (
          <Product
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
