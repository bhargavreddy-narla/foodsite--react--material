import React from "react";
import "./Mutton1.scss";
import { motion } from "framer-motion";
import Mutton2 from "./Mutton2";
import Mutton3 from "./Mutton3";

const Mutton1 = () => {
  return (
    <div className="foodsite--Secondrow">
      <motion.h2
        className="foodsite--Secondrow--Heading"
        animate={{ x: 0 }}
        initial={{ x: "-50vw" }}
        transition={{ duration: 0.5 }}
      >
        MUTTON
      </motion.h2>
      <div className="foodsite--Secondrow--mutton--Items">
        <Mutton2 items={Mutton3[0]} />
        <Mutton2 items={Mutton3[1]} />
        <Mutton2 items={Mutton3[2]} />
        <Mutton2 items={Mutton3[3]} />
      </div>
    </div>
  );
};

export default Mutton1;
