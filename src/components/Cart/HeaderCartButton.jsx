import React from "react";
// import sprite from "../../assets/SVG/sprite.svg";

import { HeaderCartIcon } from "../../assets/icons";
import "../Layout/Header";
const HeaderCartButton = ({ onShowCart, numberOfCartItems }) => {
  return (
    <button className="header__items__cart" onClick={onShowCart}>
      <HeaderCartIcon className="header__items__cart__icon" />
      <span className="header__items__cart__counter">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
