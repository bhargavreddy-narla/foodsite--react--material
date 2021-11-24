import React from "react";
import "./App.css";
import Navbar from "./Foodsite/Code/Components/Navbar/Navbar";
import Chicken1 from "./Foodsite/Code/Components/Chicken/Chicken1";
import Mutton1 from "./Foodsite/Code/Components/Mutton/Mutton1";
import Vegetarian1 from "./Foodsite/Code/Components/Vegetarian/Vegetarian1";
import Juices1 from "./Foodsite/Code/Components/Juices/Juices1";
import Deserts1 from "./Foodsite/Code/Components/Deserts/Deserts1";
import Footer1 from "./Foodsite/Code/Components/Footer/Footer1";
import Sample from "./Sample/Sample";

function App() {
  return (
    <div className="App">
      {/* <Sample /> */}
      <Navbar />
      <Chicken1 />
      <Mutton1 />
      <Vegetarian1 />
      <Juices1 />
      <Deserts1 />
      <Footer1 />
    </div>
  );
}

export default App;
