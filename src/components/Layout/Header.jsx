import React from "react";

import "./Header.scss";
import HeaderImages from "../../assets/HeaderImages";
import HeaderCartButton from "./HeaderCartButton";
// import sushiIcon from "../../assets/sushiIcon.png";
import { RestaurantLogo } from "../../assets/icons";

const Header = () => {
  return (
    <>
      <header className={`header`}>
        <div className="header__items">
          <RestaurantLogo className="header__items-logo" />
          <HeaderCartButton />
        </div>
      </header>
      <div className="header__gallery">
        <img className="header__gallery-item" src={HeaderImages.img1} alt="" />
        <img className="header__gallery-item" src={HeaderImages.img2} alt="" />
        <img className="header__gallery-item" src={HeaderImages.img3} alt="" />
      </div>
    </>
  );
};

export default Header;
