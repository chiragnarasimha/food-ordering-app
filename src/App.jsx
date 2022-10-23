import React, { useContext } from "react";
import Header from "./components/Layout/Header";
import "./App.scss";
import Menu from "./components/Meals/Menu";
import MealsSummary from "./components/Meals/MealsSummary";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Storage/CartProvider";
import Contact from "./components/Layout/Contact";

const App = (props) => {
  return (
    <CartProvider>
      <main className="app__container">
        <Header />
        <div className="app__container__body">
          <MealsSummary />
          <Menu />
          <Cart />
        </div>
      </main>
      <Contact />
    </CartProvider>
  );
};

export default App;
