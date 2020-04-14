import React from "react";
import PropTypes from "prop-types";
import style from "./style.module.scss";
import { motion } from "framer-motion";

function Layout({ children, isReady }) {
  if (!isReady) {
    return null;
  }
  return (
    <motion.div
      className={style.layout}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
      exit={{ opacity: 0 }}
    >
      <div className="content-wrapper">{children}</div>
    </motion.div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isReady: PropTypes.bool.isRequired,
};

export default Layout;
