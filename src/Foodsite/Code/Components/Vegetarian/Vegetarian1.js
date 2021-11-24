import React from "react";
import "./Vegetarian1.scss";
import { motion } from "framer-motion";
import Vegetarian2 from "./Vegetarian2";
import Vegetarian3 from "./Vegetarian3";

const Vegetarian1 = () => {
  return (
    <div className="foodsite--Thirdrow">
      <motion.h2
        className="foodsite--Thirdrow--Heading"
        animate={{ x: 0 }}
        initial={{ x: "-50vw" }}
        transition={{ duration: 0.5 }}
      >
        VEGETARIAN
      </motion.h2>
      <div className="foodsite--Thirdrow--veg--Items">
        <Vegetarian2 items={Vegetarian3[0]} />
        <Vegetarian2 items={Vegetarian3[1]} />
        <Vegetarian2 items={Vegetarian3[2]} />
        <Vegetarian2 items={Vegetarian3[3]} />
      </div>
    </div>
  );
};

export default Vegetarian1;
