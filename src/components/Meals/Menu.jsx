import React from "react";
import "./Menu.scss";
import { RestaurantLogoMini } from "../../assets/icons";
import useVisibleElement from "../../Hooks/useVisibleElement";
import MenuItem from "./MenuItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Edamame",
    description: "Steamed soybean with sea salt and truffle oil",
    price: 4.99,
  },
  {
    id: "m2",
    name: "Gyoza",
    description: "Pan-fried dumplings !",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Tekka Maki",
    description: "Maki roll with seaweed, rice and raw tuna",
    price: 20.99,
  },
  {
    id: "m4",
    name: "Sake Nigiri",
    description: "Vinegared rice topped with raw salmon",
    price: 32.5,
  },
  {
    id: "m5",
    name: "California roll",
    description: "Crab meat, cucumber and avocado",
    price: 12.99,
  },
  {
    id: "m6",
    name: "Beef Tataki",
    description: "Thinly sliced beef, black pepper served with ponzu sauce ",
    price: 34.5,
  },
  {
    id: "m7",
    name: "Edomae Chirashi",
    description: "Bed of sushi rice topped with raw seafood",
    price: 33.99,
  },
];

const Menu = (props) => {
  const [menuContainer, menuContainerVisible] = useVisibleElement({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <MenuItem meal={meal} />;
  });

  return (
    <section
      id="menu"
      ref={menuContainer}
      className={menuContainerVisible ? "menu__visible" : "menu__hidden"}
    >
      <div className="menu">
        <div className="menu__column">
          <div className="menu__column__inner-container">
            <div className="menu__column__inner-container__left__logo">
              <RestaurantLogoMini className="menu__column__inner-container__left__logo__svg" />
            </div>
            <ul className="menu__column__inner-container__left__items">
              {mealsList}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
