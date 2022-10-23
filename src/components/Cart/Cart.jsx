import "./Cart.scss";

import React from "react";
import Modal from "../UI/Modal";
import { HeaderCartIcon } from "../../assets/icons";
import { useContext } from "react";
import CartContext from "../../Storage/cart-context";
import CartItem from "./CartItem";

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);
  const onCloseHandler = () => {
    cartCtx.showCart(false);
  };

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="cart__body__content__items">
      {cartCtx.items.map((item) => (
        <CartItem
          item={item}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <>
      {cartCtx.cartIsShown && (
        <Modal
          onClose={onCloseHandler}
          additionalClassNames={
            cartCtx.cartIsShown
              ? `cart__visibleAnimation`
              : `cart__hiddenAnimation`
          }
        >
          <div className="cart">
            <div className="cart__heading">
              <h1 className="cart__heading__h1">Your Cart</h1>
              <HeaderCartIcon className="cart__heading__icon" />
            </div>
            <div className="cart__body">
              <div className="cart__body__content">{cartItems}</div>
              <div className="cart__body__footer">
                <div className="cart__body__footer__total">
                  <span>Total Amount</span>
                  <span>{`$${totalAmount}`}</span>
                </div>
                <div className="cart__body__footer__user-actions">
                  <button
                    className="cart__body__footer__user-actions__button"
                    onClick={onCloseHandler}
                  >
                    <span className="cart__body__footer__user-actions__close">
                      Close
                    </span>
                  </button>
                  {hasItems && (
                    <button className="cart__body__footer__user-actions__button">
                      <span className="cart__body__footer__user-actions__order">
                        Order
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Cart;
