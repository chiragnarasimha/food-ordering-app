import React, { useEffect, useState } from "react";

import "./Header.scss";
import HeaderImages from "../../assets/HeaderImages";
import HeaderCartButton from "./HeaderCartButton";
// import sushiIcon from "../../assets/sushiIcon.png";
import { RestaurantLogo } from "../../assets/icons";

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
          <RestaurantLogo className="header__items__logo" />
          <HeaderCartButton />
        </div>
      </header>
      <div className="header__gallery">
        {/* <img className="header__gallery__item" src={HeaderImages.img1} alt="" />
        <img className="header__gallery__item" src={HeaderImages.img2} alt="" />
        <img className="header__gallery__item" src={HeaderImages.img3} alt="" /> */}
      </div>
    </>
  );
};

export default Header;
