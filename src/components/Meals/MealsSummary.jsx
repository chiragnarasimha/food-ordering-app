import React from "react";
import "./MealsSummary.scss";
import marketing1 from "../../assets/Marketing/marketing1.jpg";
import marketing2 from "../../assets/Marketing/marketing2.jpg";
import marketing3 from "../../assets/Marketing/marketing3.jpg";
// import marketing2 from "../../assets/HeaderImages/HeaderImage1.jpg";
const MealsSummary = (props) => {
  return (
    <>
      {/* <section className="summary">
        <h2 className="summary__h2">Delicious Food, Delivered to You</h2>
        <p className="summary__p">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p className="summary__p">
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>
    </> */}
      <section className="meals-summary" id="home">
        <div className="meals-summary__left">
          <h2 className="meals-summary__h2">Delicious meals, hand crafted!</h2>
          <p className="meals-summary__p">
            We combine traditional preparations with locally sourced ingredients
            to make it authentic. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum voluptas non culpa ab nesciunt possimus
            omnis doloribus ipsum velit reprehenderit molestiae quia ea,
            voluptatibus harum nam fugiat natus aliquid! Repellat.
          </p>
        </div>
        <div className="meals-summary__right">
          <img
            className="meals-summary__img"
            src={marketing1}
            alt="Chef making sushi"
          />
        </div>
      </section>

      <section className="meals-summary">
        <div className="meals-summary__right">
          <img
            className="meals-summary__img"
            src={marketing2}
            alt="Chef making sushi"
          />
        </div>
        <div className="meals-summary__right">
          <h2 className="meals-summary__h2">
            Dine at the comfort of your home
          </h2>
          <p className="meals-summary__p">
            We care about your comfort. Just give us a call, tell us what you
            crave. It will be in your door step in 30 mins. Thats our promise.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            voluptas non culpa ab nesciunt possimus omnis doloribus ipsum velit
            reprehenderit molestiae quia ea, voluptatibus harum nam fugiat natus
            aliquid! Repellat.
          </p>
        </div>
      </section>

      <section className="meals-summary">
        <div className="meals-summary__left">
          <h2 className="meals-summary__h2">
            Or come in for an intimate experience
          </h2>
          <p className="meals-summary__p">
            We combine traditional preparations with locally sourced ingredients
            to make it authentic. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum voluptas non culpa ab nesciunt possimus
            omnis doloribus ipsum velit reprehenderit molestiae quia ea,
            voluptatibus harum nam fugiat natus aliquid! Repellat.
          </p>
        </div>
        <div className="meals-summary__right">
          <img
            className="meals-summary__img"
            src={marketing3}
            alt="Chef making sushi"
          />
        </div>
      </section>
    </>
  );
};

export default MealsSummary;
