import React from "react";
import "./Juices1.scss";
import { motion } from "framer-motion";
import Juices2 from "./Juices2";
import Juices3 from "./Juices3";

const Juices1 = () => {
  return (
    <div className="foodsite--Fourthrow">
      <motion.h2
        className="foodsite--Fourthrow--Heading"
        animate={{ x: 0 }}
        initial={{ x: "-50vw" }}
        transition={{ duration: 0.5 }}
      >
        JUICES
      </motion.h2>
      <div className="foodsite--Fourthrow--juice--Items">
        <Juices2 items={Juices3[0]} />
        <Juices2 items={Juices3[1]} />
        <Juices2 items={Juices3[2]} />
        <Juices2 items={Juices3[3]} />
      </div>
    </div>
  );
};

export default Juices1;
