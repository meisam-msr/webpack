import React from "react";
import "./App.css";
import { Counter } from "./Counter";
import logoImg from "./pexel.jpg";

const App = () => {
  return (
    <div className="App">
      <h1>Hi React App! {process.env.NODE_ENV}</h1>
      <h1>{process.env.NAME}</h1>
      <Counter />
    </div>
  );
};

export default App;
