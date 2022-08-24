import React from "react";
import Header from "./components/Layout/Header";
import "./App.scss";
const App = (props) => {
  return (
    <div className="app__container">
      <Header />
      <div>Test Body</div>
    </div>
  );
};

export default App;
