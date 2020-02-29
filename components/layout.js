import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { AppContext } from "@helpers/appContext";

function Layout({ children, theme, style }) {
  const { isLoaderOpen, openLoader } = useContext(AppContext);

  useEffect(() => {
    openLoader();
  }, []);

  return (
    <div className={`page-wrapper ${theme}`} style={style}>

      { isLoaderOpen && (
        <div className="app-loader">
          <motion.div
            className="loader"
            animate={{ scale: 0.5, rotate: 180, opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{
              yoyo: Infinity,
              duration: 1,
              ease: "easeInOut"
            }}
          />
        </div>
      )}

      { !isLoaderOpen && (
        <div>
          <motion.div
            initial={{ scaleY: 1, originY: 0 }}
            animate={{
              scaleY: 0, originY: 0,
              transition: {
                delay: 0.3,
                duration: 0.7
              }
            }}
            exit={{ opacity: 1 }}
            className="stripe top">
          </motion.div>
          <motion.div
            initial={{ scaleY: 1, originY: 1 }}
            animate={{
              scaleY: 0, originY: 1,
              transition: {
                delay: 0.3,
                duration: 0.7
              }
            }}
            exit={{ opacity: 1 }}
            className="stripe bottom">
          </motion.div>
        </div>) 
      }
      <div className="content-wrapper">{children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
