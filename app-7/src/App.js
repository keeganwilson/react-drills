import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import NewTask from "./NewTask";
import List from "./List";

const App = () => {
  const [list, setList] = useState([]);

  const addHandler = (task) => {
    setList([...list, task]);
  };

  return (
    <div className="App">
      <NewTask addTask={addHandler} />
      <List tasks={list} />
    </div>
  );
};

export default App;
