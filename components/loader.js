import React from "react";
import { motion } from "framer-motion";

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "150%",
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut",
};

export default function Loader() {
  return (
    <div className="app-loader">
      <motion.div
        className="loader"
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
        exit={{ opacity: 0 }}
      >
        <motion.span
          className="circle"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          className="circle"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          className="circle"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </div>
  );
  // return (
  //   <div className="app-loader">
  //     <motion.div
  //       className="loader"
  //       animate={{ scale: 0.5, rotate: 180, opacity: 0.5 }}
  //       exit={{ opacity: 0 }}
  //       transition={{
  //         yoyo: Infinity,
  //         duration: 1,
  //         ease: "easeInOut"
  //       }}
  //     />
  //   </div>);
}
