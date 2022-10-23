import React, { useContext } from "react";
// import sprite from "../../assets/SVG/sprite.svg";

import { HeaderCartIcon } from "../../assets/icons";
import CartContext from "../../Storage/cart-context";
import "../Layout/Header";
const HeaderCartButton = ({ onShowCart, numberOfCartItems }) => {
  const cartCtx = useContext(CartContext);
  const showCartHandler = () => {
    cartCtx.showCart(true);
  };
  return (
    <button
      className="header__items__cart"
      // onClick={onShowCart}
      onClick={showCartHandler}
    >
      <HeaderCartIcon className="header__items__cart__icon" />
      <span className="header__items__cart__counter">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
