import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
// import sprite from "../../assets/SVG/sprite.svg";

import { HeaderCartIcon } from "../../assets/icons";
import CartContext from "../../Storage/cart-context";
import "../Layout/Header";
const HeaderCartButton = ({ numberOfCartItems }) => {
  const cartCtx = useContext(CartContext);
  const showCartHandler = () => {
    cartCtx.showCart(true);
  };
  const [buttonAnimation, setButtonAnimation] = useState(false);

  const buttonClasses = `header__items__cart ${
    buttonAnimation ? "header__items__cart__bump" : "``"
  }`;

  const { items: cartItems } = cartCtx;

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    setButtonAnimation(true);

    const timer = setTimeout(() => {
      setButtonAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems]);

  return (
    <button className={buttonClasses} onClick={showCartHandler}>
      <HeaderCartIcon className="header__items__cart__icon" />
      <span className="header__items__cart__counter">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
