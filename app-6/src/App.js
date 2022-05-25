import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Todo from "./Todo";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const changeHandler = (value) => {
    setUserInput(value.target.value);
  };

  const clickHandler = () => {
    setList([...list, userInput]);
  };

  let displayList = list.map((element, index) => {
    return <Todo key={index} task={element} />;
  });

  return (
    <div className="App">
      <div>
        <input onChange={changeHandler} />
        <button onClick={clickHandler}>Add</button>
      </div>
      <div>
        <ol>{displayList}</ol>
      </div>
    </div>
  );
};

export default App;
