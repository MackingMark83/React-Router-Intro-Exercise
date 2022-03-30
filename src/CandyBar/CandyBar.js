import React, { useState } from "react";
import CandyBarImg from "./CandyBar.png";
import { Link } from "react-router-dom";
import Message from "../Router/Router";
import "./CandyBar.css";

function CandyBar() {

  const [bar, setBar] = useState([]);

  function handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setBar(prevBar => [...prevBar, { x, y }]);
  }

  const b = bar.map((bar, i) => (
    <img
      key={i}
      src={CandyBarImg}
      className="bar"
      style={{ top: `${bar.y}px`, left: `${bar.x}px` }}
      alt="chocolate"
    />
  ));
  return (
    <div className="CandyBar">
      <Message>
        <h1>Bars Purchase: {bar.length}</h1>
        <button onClick={handleClick}>Hershey's Bar</button>
        <h1>
          <Link to="/">Go back</Link>
        </h1>
      </Message>
      {b}
    </div>
  );
}

export default CandyBar;
