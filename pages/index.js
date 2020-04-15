import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { SubscribeForm } from "@components/SubscribeForm";
import { Welcome } from "@components/Welcome";
import styles from "./home.module.scss";

const imagesToPreload = [
  "/static/images/home/js_conf_amarillo.jpg",
  "/static/images/home/mapa_chile.svg",
];

function Homepage() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    // Hack para precargar las imagenes y mantener las optimizaciones q implementaba `AppContext`
    imagesToPreload.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
    // TODO: (felipe) optimize after we release
    setTimeout(() => setIsReady(true), 750);
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
      <Layout isReady={isReady}>
        <section className={styles.home}>
          <div className={styles.mapImageWrapper}>
            <img
              className={styles.mapImage}
              src="/static/images/home/mapa_chile.svg"
              alt="Mapa de Chile"
            />
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.contentContainer}>
              <div className={styles.contentWrapper}>
                <Welcome />
                <SubscribeForm />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  );
}

export default Homepage;
