import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const [arr, setArr] = useState([
    "mac n cheese",
    "begals",
    "cream cheese",
    "bacon",
    "eggs",
  ]);
  const [userInput, setUserInput] = useState("");

  let displayList = arr
    .filter((word) => word.includes(userInput))
    .map((elem) => {
      return <h2>{elem}</h2>;
    });

  const inputChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="App">
      <input onChange={inputChangeHandler}></input>
      <div>{displayList}</div>
    </div>
  );
}

export default App;
