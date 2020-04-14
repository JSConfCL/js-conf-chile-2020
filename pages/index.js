import React, { useEffect, useRef, useContext } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "@components/layout";
import { AppContext } from "@helpers/appContext";

import "@styles/home.scss";

// Create an array of letters
const string = Array.from("2021");
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
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>JSCONFCL</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="La conferencia de Javascript mas importante llega a Chile"
        />
      </Head>
      <Layout theme="dark home">
        <section>
          <img
            id="map"
            src="/static/images/home/mapa_chile.svg"
            alt="Mapa de Chile"
          />
          <div className="image">
            <img
              src="/static/images/home/js_conf_amarillo.jpg"
              alt="Logo JS Conf Chile 2020"
              ref={imgRef}
              onLoad={handleImageLoaded}
              onError={handleImageLoaded}
            />
          </div>
          <div className="text">
            <h1>
              JSCONF<span>CL</span>
            </h1>
            <div className="hello-there">
              <motion.div
                className="hello-there"
                width={"100%"}
                overflow={"hidden"}
                background={""}
                style={{
                  display: "flex", // Set the display value to flex
                  justifyContent: "center", // Center all children elements on the x axis
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
          <div className="subscribe-form">
            <p>Entérate de todas nuestras novedades y avances!</p>
            <p>(Descuida: detestamos el spam tanto como tú)</p>
            <form className="input">
              <input
                type="text"
                placeholder="email"
                name="email-input"
                id="email"
              />
              <button type="submit" aria-label="suscribe">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                </svg>
              </button>
            </form>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  );
}

export default Homepage;
