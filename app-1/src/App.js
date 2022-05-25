import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");

  const inputChangeHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <input className="input" onChange={inputChangeHandler} />
      <h2>{text}</h2>
    </div>
  );
};

export default App;
