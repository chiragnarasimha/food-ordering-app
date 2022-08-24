import React from "react";
import "./Header.scss";
import HeaderImages from "../../assets/HeaderImages";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <div className="header">
      {/* <header className="header"> */}
      <header>
        <div className="header__items">
          <h1>Sushi San</h1>
          <HeaderCartButton />
          {/* <button>Cart</button> */}
        </div>
      </header>
      <div className="header__gallery">
        <img className="header__gallery-item" src={HeaderImages.img1} alt="" />
        <img className="header__gallery-item" src={HeaderImages.img2} alt="" />
        <img className="header__gallery-item" src={HeaderImages.img3} alt="" />
      </div>
    </div>
  );
};

export default Header;
