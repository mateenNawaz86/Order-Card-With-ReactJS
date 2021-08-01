import React from "react";
import MilkCard from "../MilkCard/MilkCard";
import OrderCard from "../Order/OrderCard";
import { Route, Switch } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
      <Switch>
        <section id="card">
          <Route path="/" component={MilkCard} exact />
        </section>
      </Switch>

      <Switch>
        <section id="sumbitOrder">
          <Route path="/order" component={OrderCard} exact />
        </section>
      </Switch>
    </>
  );
};

export default App;
