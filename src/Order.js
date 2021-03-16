import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <div className="order__headingContainer">
        <div className="order__headingLeft">
          <h2>Order</h2>
          <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
        </div>
        <div className="order__headingRight">
          <p className="order__id">
            Order ID: <small> {order.id}</small>
          </p>
        </div>
      </div>
      <div className="order__products">
        {order.data.basket?.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))}
      </div>

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType="text"
        thousandSeparator={true}
        prefix={"₹ "}
      />
    </div>
  );
}

export default Order;
