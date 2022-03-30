import React, { useState } from "react";
import SodaPopImg from "./SodaPop.png";
import { Link } from "react-router-dom";
import Message from "../Router/Router";
import "./SodaPop.css";

function SodaPop() {

  const [soda, setSoda] = useState([]);

  function handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setSoda(prevsoda => [...prevsoda, { x, y }]);
  }

  const s = soda.map((soda, i) => (
    <img
      key={i}
      src={SodaPopImg}
      className="bottle"
      style={{ top: `${soda.y}px`, left: `${soda.x}px` }}
      alt="cola"
    />
  ));
  return (
    <div className="SodaPop">
      <Message>
        <h1>Bottles Purchase: {soda.length}</h1>
        <button onClick={handleClick}>Coca Cola</button>
        <h1>
          <Link to="/">Go back</Link>
        </h1>
      </Message>
      {s}
    </div>
  );
}

export default SodaPop;