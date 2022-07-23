import React from "react";
import "./App.css";
import logoImg from "./pexel.jpg";

const App = () => {
  return (
    <div className="App">
      <h1>React App! {process.env.NODE_ENV}</h1>
      <h1>{process.env.NAME}</h1>
      <img src={logoImg} />
    </div>
  );
};

export default App;
