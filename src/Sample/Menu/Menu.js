import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <h3>Menu</h3>
      <ul>
        <li>
          <Link to="/chicken">Chicken</Link>
        </li>
        <li>
          <Link to="/mutton">Mutton</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/chicken"></Route>
        <Route path="/Mutton"></Route>
      </Switch>
    </div>
  );
};

export default Menu;
