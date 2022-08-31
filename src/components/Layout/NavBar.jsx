import React from "react";
import { HomeIcon, MenuIcon, PhoneIcon } from "../../assets/icons";
// import "./NavBar.scss";

import "./Header.scss";

const links = [
  {
    id: 1,
    text: "Home",
    url: "#home",
    icon: <HomeIcon className="header__items__navbar__li__icon" />,
  },
  {
    id: 2,
    text: "Menu",
    url: "#menu",
    icon: <MenuIcon className="header__items__navbar__li__icon" />,
  },
  {
    id: 3,
    text: "Contact",
    url: "#contact-us",
    icon: <PhoneIcon className="header__items__navbar__li__icon" />,
  },
];

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

  return (
    <div className="header__items__navbar">
      <ul className="header__items__navbar__ul">
        {links.map((link) => {
          return (
            <>
              <a href={link.url} className="header__items__navbar__ul__a">
                <li
                  key={`li ${link.name} ${link.id}`}
                  className="header__items__navbar__li"
                >
                  {link.icon}
                  <a
                    href={link.url}
                    key={`a ${link.name} ${link.id}`}
                    className="header__items__navbar__li__a"
                    onClick={handleClick}
                  >
                    {link.text}
                  </a>
                </li>
              </a>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
