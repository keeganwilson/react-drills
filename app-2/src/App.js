import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(["mac n cheese", "begals", "cream cheese", "bacon", "eggs"]);
  }, []);

  let displayList = arr.map((elem) => {
    return <h2>{elem}</h2>;
  });

  return <div className="App">{displayList}</div>;
};

export default App;
