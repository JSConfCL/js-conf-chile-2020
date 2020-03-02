import { useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";
import Layout from "@components/layout";
import { AppContext } from "@helpers/appContext";

import "@styles/home.scss";

// Create an array of letters
const string = Array.from("Octubre 2020");

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
      <motion.section
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        className="home flex align-center justify-end"
      >
        <div className="text flex vertical align-center">
          <h1>JS Conf Chile</h1>
          <div className="hello-there flex">
            <motion.div
              className="hello-there flex"
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
            alt="Home"
            ref={imgRef}
            onLoad={handleImageLoaded}
            onError={handleImageLoaded}
          />
        </div>
        </motion.section>
    </Layout>
  );
}

export default Homepage;
