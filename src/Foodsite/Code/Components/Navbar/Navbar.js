import React, { useState } from "react";
import "./Navbar.scss";
import Axios from "axios";
import Recipe from "./Recipe";
import Alert from "./Alert";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
const Navbar = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");
  const App_id = "4e9f05eb";
  const App_key = "9b904d703fa0d46a88ce1ac63f29f498";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`;
  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert("No food with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setAlert("");
    } else {
      setAlert("Please fill the form");
    }
  };
  const onChange = (e) => setQuery(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <div className="foodBody">
      <AppBar className="appbar" color="default">
        <Toolbar className="appbar--Tools">
          <img
            src="./images/foodicon.jpg"
            alt="foodicon"
            width="80px"
            height="80px"
          />
          <div className="appbar--Buttons">
            <Button variant="text">HOME</Button>
            <Button variant="text">MENU</Button>
            <Button variant="text">OFFERS</Button>
            <Button variant="text">DELIVERY</Button>
          </div>
          <form onSubmit={onSubmit} className="search-form">
            {alert !== "" && <Alert alert={alert} />}
            <input
              type="text"
              name="query"
              onChange={onChange}
              value={query}
              autoComplete="off"
              placeholder="Search Food"
            />
            <input type="submit" value="Search" />
          </form>
        </Toolbar>
      </AppBar>
      <div className="recipes">
        {recipes !== [] && recipes.map((recipe) => <Recipe recipe={recipe} />)}
      </div>
    </div>
  );
};

export default Navbar;
