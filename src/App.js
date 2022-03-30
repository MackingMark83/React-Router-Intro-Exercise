import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine/VendingMachine";
import Cracker from "./Cracker/Cracker";
import CandyBar from "./CandyBar/CandyBar";
import SodaPop from "./SodaPop/SodaPop";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <VendingMachine />
        </Route>
        <Route path="/SodaPop" exact>
          <SodaPop />
        </Route>
        <Route path="/CandyBar" exact>
          <CandyBar />
        </Route>
        <Route path="/Cracker" exact>
          <Cracker />
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
