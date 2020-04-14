import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@components/Layout";
import SubscribeForm from "@components/SubscribeForm";
import Welcome from "@components/Welcome";
import styles from "./home.module.scss";

const imagesToPreload = [
  "/static/images/home/js_conf_amarillo.jpg",
  "/static/images/home/mapa_chile.svg",
];

function Homepage() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    imagesToPreload.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
    // TODO: (felipe) optimize properly later
    setTimeout(() => setIsReady(true), 500);
  }, []);
  return (
    <div>
      <Head>
        <title>JSCONFCL</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="La conferencia de Javascript mas importante llega a Chile"
        />
      </Head>
      <Layout isReady={isReady}>
        <section className={styles.home}>
          <div className={styles.blur}>
            <img
              className={styles.mapImage}
              src="/static/images/home/mapa_chile.svg"
              alt="Mapa de Chile"
            />
          </div>
          <div className={styles.contentContainer}>
            <Welcome />
            <SubscribeForm />
          </div>
        </section>
      </Layout>
    </div>
  );
}

export default Homepage;
