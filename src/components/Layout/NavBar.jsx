import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { HomeIcon, MenuIcon, PhoneIcon } from "../../assets/icons";
// import "./NavBar.scss";

import "./Header.scss";

const NavBar = (props) => {
  /**
   * This is to ensure that the we scroll a little above the element. We need to do this as we need to account for the nav bar too.
   * @param {*} e Event
   */
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 60,
    });
  };

  const links = [
    {
      id: 1,
      text: "Home",
      url: "#home",
      icon: <HomeIcon className="header__items__navbar__button__icon" />,
    },
    {
      id: 2,
      text: "Menu",
      url: "#menu",
      icon: <MenuIcon className="header__items__navbar__button__icon" />,
    },
    {
      id: 3,
      text: "Contact",
      url: "#contact-us",
      icon: <PhoneIcon className="header__items__navbar__button__icon" />,
    },
  ];

  return (
    <div className="header__items__navbar">
      <ul className="header__items__navbar__ul">
        {links.map((link) => {
          return (
            <>
              <a
                href={link.url}
                key={`a1 ${link.text} ${link.id}`}
                className="header__items__navbar__ul__a1"
                onClick={handleClick}
              >
                <button
                  key={`li ${link.text} ${link.id}`}
                  className="header__items__navbar__button"
                  href={link.url}
                >
                  {link.icon}
                  <span className="header__items__navbar__button__span">
                    {link.text}
                  </span>
                </button>
              </a>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
