import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const value = getBasketTotal(basket);
  console.log(value);
  return (
    <div className="subtotal">
      <p>
        Subtotal ( <strong>{basket.length}</strong> items ):
        <span>
          <CurrencyFormat
            className="currency__format"
            decimalScale={2}
            value={getBasketTotal(basket)}
            diaplayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </span>
      </p>
      <input type="checkbox" /> This order contains a gift
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
