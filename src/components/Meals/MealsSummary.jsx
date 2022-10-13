import { React, useEffect } from "react";
import "./MealsSummary.scss";
import marketing1 from "../../assets/Marketing/marketing1.jpg";
import marketing2 from "../../assets/Marketing/marketing2.jpg";
import marketing3 from "../../assets/Marketing/marketing3.jpg";
import useVisibleElement from "../../Hooks/useVisibleElement";
// import marketing2 from "../../assets/HeaderImages/HeaderImage1.jpg";
const MealsSummary = (props) => {
  const threshold = 0.5;
  const [description1, description1Visible] = useVisibleElement({
    root: null,
    rootMargin: "0px",
    threshold: threshold,
  });
  const [description2, description2Visible] = useVisibleElement({
    root: null,
    rootMargin: "0px",
    threshold: threshold,
  });
  const [description3, description3Visible] = useVisibleElement({
    root: null,
    rootMargin: "0px",
    threshold: threshold,
  });

  // useEffect(() => {
  //   // window.addEventListener("scroll", () => {});
  //   window.scroll(function () {
  //     $(".meals-summary__animation__hidden").css(
  //       "opacity",
  //       1 - $(window).scrollTop() / 250
  //     );
  //   });
  //   return () => {
  //     window.removeEventListener("scroll", () => {});
  //   };
  // }, []);

  return (
    <>
      <div className="meals-summary__top-spacer" id="home"></div>
      <div
        className={`meals-summary__animation ${
          description1Visible
            ? "meals-summary__animation__visible"
            : "meals-summary__animation__hidden"
        }`}
        ref={description1}
      >
        <section className="meals-summary">
          <div className="meals-summary__left">
            <h2 className="meals-summary__h2">Delicious Food, hand crafted!</h2>
            <p className="meals-summary__p">
              We combine traditional preparations with locally sourced
              ingredients to make it authentic. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatum voluptas non culpa ab
              nesciunt possimus omnis doloribus ipsum velit reprehenderit
              molestiae quia ea, voluptatibus harum nam fugiat natus aliquid!
              Repellat.
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
      </div>

      <div
        className={`meals-summary__animation ${
          description2Visible
            ? "meals-summary__animation__visible"
            : "meals-summary__animation__hidden"
        }`}
        ref={description2}
      >
        <section className={`meals-summary`}>
          <div className="meals-summary__left">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum voluptas non culpa ab nesciunt possimus omnis doloribus
              ipsum velit reprehenderit molestiae quia ea, voluptatibus harum
              nam fugiat natus aliquid! Repellat.
            </p>
          </div>
        </section>
      </div>

      <div
        className={`meals-summary__animation ${
          description3Visible
            ? "meals-summary__animation__visible"
            : "meals-summary__animation__hidden"
        }`}
        ref={description3}
      >
        <section className={`meals-summary`}>
          <div className="meals-summary__left">
            <h2 className="meals-summary__h2">
              Or come in for an intimate experience
            </h2>
            <p className="meals-summary__p">
              We combine traditional preparations with locally sourced
              ingredients to make it authentic. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatum voluptas non culpa ab
              nesciunt possimus omnis doloribus ipsum velit reprehenderit
              molestiae quia ea, voluptatibus harum nam fugiat natus aliquid!
              Repellat.
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
      </div>
    </>
  );
};

export default MealsSummary;
