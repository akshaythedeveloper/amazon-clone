import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import LinesEllipsis from "react-lines-ellipsis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    //Dispatch The Item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <img src={image} />

      <div className="product__info">
        <LinesEllipsis
          text={title}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />

        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <FontAwesomeIcon icon={faStar} color="#f0c14b" />
            ))}
        </div>
      </div>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
