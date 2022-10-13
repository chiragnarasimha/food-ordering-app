import React, { useEffect, useState } from "react";

import "./Header.scss";
import HeaderImages from "../../assets/HeaderImages";
import HeaderCartButton from "./HeaderCartButton";
// import sushiIcon from "../../assets/sushiIcon.png";
import { RestaurantLogoFull } from "../../assets/icons";
import NavBar from "./NavBar";

const Header = () => {
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
  return (
    <>
      <header className={`header ${headerShadow && "header--shadow"}`}>
        <div className="header__items">
          <RestaurantLogoFull className="header__items__logo" />
          <NavBar />
          <HeaderCartButton />
        </div>
      </header>
      <div className="header__bottom-spacer" />
    </>
  );
};

export default Header;
