import React, { useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";
import Layout from "@components/layout";
import { AppContext } from "@helpers/appContext";

import "@styles/home.scss";

// Create an array of letters
const string = Array.from("Pronto...");

// Add staggering effect to the children of the container
const containerVariants = {
  before: {},
  after: { 
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.2
    } 
  },
}
  
// Variants for animating each letter
const letterVariants = {
  before: {
    y: 20,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 150
    }
  },
  after: {
    y: 0,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 150
    }
  }
};

function Homepage(props) {
  const imgRef = useRef(null);
  const { isLoaderOpen, closeLoader } = useContext(AppContext);
  const handleImageLoaded = () => {
    if (isLoaderOpen) {
      closeLoader();
    }
  };

  useEffect(() => {
    if (imgRef.current?.complete) {
      closeLoader();
    }
  }, [])

  return (
    <Layout theme="dark home">
      <section>
        <img
          id="map"
          src="/static/images/home/mapa_chile.svg"
          alt="Mapa de Chile"
        />
        <div className="text">
          <h1>JS Conf Chile 2020</h1>
          <div className="hello-there">
            <motion.div
              className="hello-there"
              width={"100%"}
              overflow={"hidden"}
              background={""}
              style={{
                display: "flex", // Set the display value to flex
                justifyContent: "center" // Center all children elements on the x axis
              }}
              variants={containerVariants}
              initial={"before"}
              animate={"after"}
              exit="exit"
            >
              {string.map((letter, index) => (
                <motion.span
                  key={index}
                  width={"auto"} // Set the width to the width of the letter
                  background={""}
                  style={{ position: "relative" }} // Position elements
                  variants={letterVariants}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      
        <div className="image">
          <img
            src="/static/images/home/js_conf_amarillo.jpg"
            alt="Logo JS Conf Chile 2020"
            ref={imgRef}
            onLoad={handleImageLoaded}
            onError={handleImageLoaded}
          />
        </div>
      </section>
    </Layout>
  );
}

export default Homepage;
