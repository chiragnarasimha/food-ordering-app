import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

import React from "react";

const Meals = (props) => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};

export default Meals;
