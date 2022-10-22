import React, { useContext } from "react";
import Header from "./components/Layout/Header";
import "./App.scss";
import Menu from "./components/Meals/Menu";
import MealsSummary from "./components/Meals/MealsSummary";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./Storage/CartProvider";
import CartContext from "./Storage/cart-context";
const App = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const cartCtx = useContext(CartContext);

  return (
    <CartProvider>
      <div className="app__container">
        <Header onShowCart={showCartHandler} />
        <div className="app__container__body">
          <MealsSummary />
          <Menu />
          {cartIsShown && <Cart onClose={hideCartHandler} />}
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
