import "./Menu.scss";
import React from "react";

const MenuItem = ({ meal }) => {
  return (
    <li key={`MenuItem Name ${meal.name} ${meal.id}`}>
      <div className="menu__column__inner-container__item">
        <div className="menu__column__inner-container__item__left">
          <div className="menu__column__inner-container__item__left__name">
            {meal.name}
          </div>
          <div className="menu__column__inner-container__item__left__description">
            {meal.description}
          </div>
          <div className="menu__column__inner-container__item__left__price">
            ${meal.price.toFixed(2)}
          </div>
        </div>
        <div className="menu__column__inner-container__item__right">
          <form className="menu__column__inner-container__item__right__form">
            <label
              htmlFor="menuQuantity"
              className="menu__column__inner-container__item__right__form__input-label"
            >
              x
            </label>
            <input
              type="number"
              name="Quantity"
              id="menuQuantity"
              min="1"
              step="1"
              className="menu__column__inner-container__item__right__form__input"
            />
            <button className="menu__column__inner-container__item__right__form__button">
              <span className="menu__column__inner-container__item__right__button__span">
                Add to cart
              </span>
            </button>
          </form>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
