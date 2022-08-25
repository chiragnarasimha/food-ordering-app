import React from "react";
// import sprite from "../../assets/SVG/sprite.svg";

import { HeaderCartIcon } from "../../assets/icons";
import "./Header.scss";
const HeaderCartButton = (props) => {
  return (
    <button className="header__items__cart">
      <span>
        <HeaderCartIcon className="header__items__cart__icon" />
      </span>
      <span className="header__items__cart__counter">3</span>
    </button>
  );
};

export default HeaderCartButton;
