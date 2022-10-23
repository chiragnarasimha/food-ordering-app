import React, { useState } from "react";
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  cartIsShown: false,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      // .concat() is more appropriate as we do not want to edit the old array in memory. concat will return a new array instead.
      const updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        cartIsShown: state.cartIsShown,
      };

    case "REMOVE_ITEM":
      break;
    case "SHOW_CART":
      const updatedCartIsShown = action.cartIsShown;

      // console.log({
      //   filename: "CartProvider.jsx",
      //   whoCalled: "cartReducer > SHOW_CART",
      //   state_cartIsShown: updatedCartIsShown,
      // });
      return {
        items: state.items,
        totalAmount: state.totalAmount,
        cartIsShown: updatedCartIsShown,
      };
    default:
      break;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  // const [cartIsShown, setCartIsShown] = useState(false);
  const cartVisibilityHandler = (cartIsShown) => {
    // setCartIsShown(true);
    // console.log({
    //   filename: "CartProvider.jsx",
    //   whoCalled: "showCartHandler",

    // });
    dispatchCartAction({ type: "SHOW_CART", cartIsShown: cartIsShown });
  };

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "ADD_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    cartIsShown: cartState.cartIsShown,
    showCart: cartVisibilityHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
