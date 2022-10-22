import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {};

  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
    console.log({
      filename: "CartProvider.jsx",
      whoCalled: "showCartHandler",
      cartIsShown: cartIsShown,
    });
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    cartIsShown: cartIsShown,
    showCart: showCartHandler,
    hideCart: hideCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
