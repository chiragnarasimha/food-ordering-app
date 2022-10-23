import React, { useContext } from "react";
import Header from "./components/Layout/Header";
import "./App.scss";
import Menu from "./components/Meals/Menu";
import MealsSummary from "./components/Meals/MealsSummary";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Storage/CartProvider";

const App = (props) => {
  return (
    <CartProvider>
      <div className="app__container">
        <Header />
        <div className="app__container__body">
          <MealsSummary />
          <Menu />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
