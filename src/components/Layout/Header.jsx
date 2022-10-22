import React, { useEffect, useState } from "react";

import "./Header.scss";
import HeaderCartButton from "../Cart/HeaderCartButton";
// import sushiIcon from "../../assets/sushiIcon.png";
import { RestaurantLogoFull } from "../../assets/icons";
import NavBar from "./NavBar";
import { useContext } from "react";
import CartContext from "../../Storage/cart-context";

const Header = ({ onShowCart }) => {
  const [headerShadow, setHeaderShadow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 100) {
        setHeaderShadow(false);
        return;
      }

      setHeaderShadow(true);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  return (
    <>
      <header className={`header ${headerShadow && "header--shadow"}`}>
        <div className="header__items">
          <RestaurantLogoFull className="header__items__logo" />
          <NavBar />
          <HeaderCartButton
            onShowCart={onShowCart}
            numberOfCartItems={numberOfCartItems}
          />
        </div>
      </header>
      <div className="header__bottom-spacer" />
    </>
  );
};

export default Header;
