import React from "react";
import "./Menu.scss";
import Card from "../UI/Card";

import { RestaurantLogoMini } from "../../assets/icons";

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
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Menu = (props) => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <li>{meal.name}</li>;
  });

  return (
    <section id="menu">
      {/* <div className="menu__heading">
        <h1 className="menu__heading__h1">Menu</h1>
      </div> */}

      <div className="menu">
        <div className="menu__column">
          <div className="menu__column__inner-container">
            <div className="menu__column__inner-container__left__logo">
              <RestaurantLogoMini className="menu__column__inner-container__left__logo__svg" />
            </div>
            <div className="menu__column__inner-container__left__items">
              {mealsList}
            </div>
          </div>
        </div>
        <div className="menu__column">TEST</div>

        {/* <Card> */}
        {/* <h1>Menu</h1>
      <div>
        <ul>{mealsList}</ul>
      </div> */}
        {/* </Card> */}
      </div>
    </section>
  );
};

export default Menu;