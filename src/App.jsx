import React from "react";
import Header from "./components/Layout/Header";
import "./App.scss";
import MealsMarketing from "./components/Meals/MealsMarketing";
import Menu from "./components/Meals/Menu";
const App = (props) => {
  const render_content = () => {
    let content = [];
    for (let i = 0; i < 500; i++) {
      content.push(<div key={i}>Test Content</div>);
    }
    return content;
  };
  return (
    <div className="app__container">
      {/* <div> */}
      <Header />
      <MealsMarketing />
      <Menu />
      {/* <div>Test Body</div>
      <div>{render_content()}</div> */}
    </div>
  );
};

export default App;