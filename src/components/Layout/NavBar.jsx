import React from "react";
import "./NavBar.scss";

const links = [
  {
    id: 1,
    text: "Home",
    url: "#home",
  },
  {
    id: 2,
    text: "Menu",
    url: "#menu",
  },
  {
    id: 3,
    text: "Contact",
    url: "#contact-us",
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
    <div>
      <ul>
        {links.map((link) => {
          return (
            <a href={link.url} key={link.id} onClick={handleClick}>
              {link.text}
            </a>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
