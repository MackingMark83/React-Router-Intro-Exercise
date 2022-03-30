import React from "react";
import { Link } from "react-router-dom";
import Message from "../Router/Router";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";

function VendingMachine() {
  return(
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${vendingMachineImg})` }}>
      <Message>
        <h1>Pick A Snack</h1>
      </Message>
      <Message>
        <h1><Link to="/SodaPop">Soda Pop</Link></h1>
        <h1><Link to="/CandyBar">Candy Bars</Link></h1>
        <h1><Link to="/Cracker">Crackers</Link></h1>
      </Message>
    </div>
  );
}

export default VendingMachine;
