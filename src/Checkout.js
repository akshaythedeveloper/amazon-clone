import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/MFSFeb/ILM/ILM640x45._CB658773368_.jpg"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <div className="checkout__right checkout__subtotal">
            <Subtotal />
          </div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.length == 0 ? (
            <h1 style={{ fontWeight: 600, marginTop: 20, marginBottom: 20 }}>
              You have no items in the basket.
            </h1>
          ) : (
            basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          )}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
