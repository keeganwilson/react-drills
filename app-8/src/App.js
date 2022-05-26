import React, { useEffect, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import axios from "axios";

const App = () => {
  const [deathStar, setDeathStar] = useState({});

  const getDeathStar = () => {
    axios
      .get("https://swapi.dev/api/starships/9")
      .then((res) => setDeathStar(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDeathStar();
  }, []);

  return (
    <div className="App">
      <h2>Model: {deathStar.model}</h2>
      <h2>Manufacturer: {deathStar.manufacturer}</h2>
      <h2>Class: {deathStar.starship_class}</h2>
      <h2>Crew: {deathStar.crew}</h2>
      <h2>Passengers: {deathStar.passengers}</h2>
    </div>
  );
};

export default App;
