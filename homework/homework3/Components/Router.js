import React from "react";
import Header from "./Header";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";

export default () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Coins} />
        <Route path="/exchanges" component={Exchanges} />
        <Route path="/prices" component={Prices} />
      </Switch>
    </Router>
  );
};
