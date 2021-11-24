import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Chicken1 from "../Foodsite/Code/Components/Chicken/Chicken1";
import Mutton1 from "../Foodsite/Code/Components/Mutton/Mutton1";
import Vegetarian1 from "../Foodsite/Code/Components/Vegetarian/Vegetarian1";
import Juices1 from "../Foodsite/Code/Components/Juices/Juices1";
//import Menu from "./Menu/Menu";

const Sample = () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/chicken" style={{ marginLeft: 50 }}>
        Chicken
      </Link>
      <Link to="/mutton" style={{ marginLeft: 50 }}>
        Mutton
      </Link>
      <Link to="/vegetarian" style={{ marginLeft: 50 }}>
        Vegetarian
      </Link>
      <Link to="/juices" style={{ marginLeft: 50 }}>
        Juices
      </Link>
      <Link to="/menu" style={{ marginLeft: 50 }}>
        Menu
      </Link>
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
      <Switch>
        <Route path="/chicken" exact component={Chicken1}></Route>
        <Route path="/mutton" exact component={Mutton1}></Route>
        <Route path="/vegetarian" exact component={Vegetarian1}></Route>
        <Route path="/Juices" exact component={Juices1}></Route>
      </Switch>
    </Router>
  );
};

export default Sample;
