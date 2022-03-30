import React, { useState } from "react";
import CandyBarImg from "./Cracker.png";
import { Link } from "react-router-dom";
import Message from "../Router/Router";
import "./Cracker.css";

function Cracker() {

  const [cookie, setCookie] = useState([]);

  function handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setCookie(prevcookie => [...prevcookie, { x, y }]);
  }

  const c = cookie.map((cookie, i) => (
    <img
      key={i}
      src={CandyBarImg}
      className="wrapper"
      style={{ top: `${cookie.y}px`, left: `${cookie.x}px` }}
      alt="chocolate"
    />
  ));
  return (
    <div className="Cracker">
      <Message>
        <h1>Packs Purchase: {cookie.length}</h1>
        <button onClick={handleClick}>Austin's Crackers</button>
        <h1>
          <Link to="/">Go back</Link>
        </h1>
      </Message>
      {c}
    </div>
  );
}

export default Cracker;