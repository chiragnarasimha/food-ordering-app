import "./Cart.scss";

import React from "react";
import { useContext } from "react";
import CartProvider from "../../Storage/CartProvider";

const CartItem = ({ item, onAdd, onRemove }) => {
  const cartCtx = useContext(CartProvider);

  return (
    <li className="cart__body__content__items__item">
      <div className="cart__body__content__items__item__details">
        <span>{item.name}</span>
      </div>

      <div className="cart__body__content__items__item__other">
        <div className="cart__body__content__items__item__other">
          <span className="">{`$${item.price.toFixed(2)}`}</span>
          <span className="">x {item.amount}</span>
        </div>
        <div className="cart__body__content__items__item__other__actions">
          <button onClick={onRemove}>−</button>
          <button onClick={onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
