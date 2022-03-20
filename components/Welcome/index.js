import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import style from "./style.module.scss";

// Create an array of letters
const string = Array.from("2022");
// Add staggering effect to the children of the container
const containerVariants = {
  before: {},
  after: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.2,
    },
  },
};
// Variants for animating each letter
const letterVariants = {
  before: {
    y: 20,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 150,
    },
  },
  after: {
    y: 0,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 150,
    },
  },
};

export function Welcome() {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <Image
          src="/static/images/home/js_conf_amarillo.jpg"
          alt="Logo JS Conf Chile 2020"
          width={200}
          height={200}
        />
      </div>
      <div className={style.text}>
        <h1>
          JSCONF<span>CL</span>
        </h1>
        <div>
          <motion.div
            className={style.helloThere}
            overflow="hidden"
            variants={containerVariants}
            initial="before"
            animate="after"
            exit="exit"
          >
            {string.map((letter, index) => (
              <motion.span key={index} variants={letterVariants}>
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
