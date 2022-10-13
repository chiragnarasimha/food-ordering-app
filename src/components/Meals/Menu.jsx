import React from "react";
import "./Menu.scss";
import { RestaurantLogoMini } from "../../assets/icons";
import useVisibleElement from "../../Hooks/useVisibleElement";
import MenuItem from "./MenuItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and Green...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Yellow Bowl",
    description: "Healthy...and Yellow...",
    price: 18.99,
  },
  {
    id: "m6",
    name: "Red Bowl",
    description: "Healthy...and Red...",
    price: 18.99,
  },
  {
    id: "m7",
    name: "Blue Bowl",
    description: "Healthy...and Blue...",
    price: 18.99,
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
