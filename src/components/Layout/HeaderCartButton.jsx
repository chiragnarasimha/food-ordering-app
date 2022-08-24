import React from "react";
// import sprite from "../../assets/SVG/sprite.svg";

import { HeaderCartIcon } from "../../assets/icons";
import "./Header.scss";
const HeaderCartButton = (props) => {
  return (
    <button className="header__cart">
      <span>
        <HeaderCartIcon className="header__cart--button-icon" />
      </span>
      <span>Your Cart</span>
      <span>3</span>
    </button>
  );
};

export default HeaderCartButton;
