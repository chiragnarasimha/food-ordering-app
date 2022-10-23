import "./Menu.scss";
import React, { useContext, useRef } from "react";
import { useState } from "react";
import CartContext from "../../Storage/cart-context";

const MenuItem = ({ meal }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    // Convert the input string into a number
    const enteredAmountInNumber = +enteredAmount;
    // Guard clause to check for errors
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountInNumber < 1 ||
      enteredAmountInNumber > 10
    ) {
      setAmountIsValid(false);
      return;
    } else {
      setAmountIsValid(true);
    }

    addItemToCartHandler(enteredAmountInNumber);
  };

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
          <form
            className="menu__column__inner-container__item__right__form"
            onSubmit={submitHandler}
          >
            <label
              htmlFor="menuQuantity"
              className="menu__column__inner-container__item__right__form__input-label"
            >
              x
            </label>
            <input
              ref={amountInputRef}
              type="number"
              name="Quantity"
              id="menuQuantity"
              min="1"
              max={10}
              step="1"
              defaultValue={1}
              className="menu__column__inner-container__item__right__form__input"
            />
            <button className="menu__column__inner-container__item__right__form__button">
              <span className="menu__column__inner-container__item__right__button__span">
                Add to cart
              </span>
            </button>
          </form>
          {!amountIsValid && (
            <p className="menu__column__inner-container__item__right__form__error-message">
              Please enter a valid amount (1-10)
            </p>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
