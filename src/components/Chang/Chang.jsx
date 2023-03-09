import React from "react";
import "./chang.css"
import "../Services/Services.css"
import Card from "../Card/Card";
import { motion } from "framer-motion";
import heartemoji from "../../img/heartemoji.png"
import glasses from "../../img/glasses.png"
import humble from "../../img/humble.png"

const Chang = () => {

    // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={heartemoji}
            heading={"Designing"}
            detail={"CSS, SASS, Word Press"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"Html, JavaScript, React js"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={
              "Bootstrap,  Material UI/mui"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
  )
}

export default Chang