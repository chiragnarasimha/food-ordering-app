import React from "react";
// import sprite from "../../assets/SVG/sprite.svg";

import { HeaderCartIcon } from "../../assets/icons";
import "./Header.scss";
const HeaderCartButton = (props) => {
  return (
    <a href="#menu">
      <button className="header__items__cart" href="#menu">
        <HeaderCartIcon className="header__items__cart__icon" />
        <span className="header__items__cart__counter">3</span>
      </button>
    </a>
  );
};

export default HeaderCartButton;
