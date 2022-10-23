import "./Cart.scss";

import React from "react";
import Modal from "../UI/Modal";
import { HeaderCartIcon } from "../../assets/icons";
import { useContext } from "react";
import CartContext from "../../Storage/cart-context";

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);
  const onCloseHandler = () => {
    cartCtx.showCart(false);
  };
  const cartItems = (
    <ul className="cart__body__content__items">
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
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
                  <span>35.652</span>
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
                  <button className="cart__body__footer__user-actions__button">
                    <span className="cart__body__footer__user-actions__order">
                      Order
                    </span>
                  </button>
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