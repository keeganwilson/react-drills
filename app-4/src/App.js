import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const clickHandler = (event) => {
    alert(`Username: ${username} Password: ${password}`);
  };

  return (
    <div className="App">
      <input className="login" onChange={usernameChangeHandler}></input>
      <input className="password" onChange={passwordChangeHandler}></input>
      <button onClick={clickHandler}>Submit</button>
    </div>
  );
};

export default App;
