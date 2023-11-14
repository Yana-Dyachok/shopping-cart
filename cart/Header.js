import { FaShoppingCart } from "react-icons/fa";
import React, { useState } from "react";
import Order from "./Order";
const showOrders = (props) => {
  let sum = 0;
  props.orders.forEach((el) => (sum += Number.parseFloat(el.price)));
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="sum-cost">Subtotal: ${sum.toFixed(2)}</p>
    </div>
  );
};
const showZero = () => {
  return (
    <div>
      <h2>There are no products</h2>
    </div>
  );
};
const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false);
  return (
    <header>
      <div>
        <h1 className="header-title">Online store</h1>
        <div className="shopping-cart-block">
          <FaShoppingCart
            onClick={() => setCartOpen((cartOpen = !cartOpen))}
            className={`shopping-cart ${cartOpen && "active"}`}
          />
          {props.orders.length > 0 ? (
            <div className="show-count-order">{props.orders.length}</div>
          ) : null}
        </div>
      </div>
      {cartOpen && (
        <div className="opened-cart">
          {props.orders.length > 0 ? showOrders(props) : showZero()}
        </div>
      )}
    </header>
  );
};

export default Header;
