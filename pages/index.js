import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Layout } from "@components/Layout";
import { SubscribeForm } from "@components/SubscribeForm";
import { Welcome } from "@components/Welcome";
import styles from "./home.module.scss";

import { GA_TRACKING_ID } from "@helpers/googleAnalytics";

const imagesToPreload = [
  "/static/images/home/js_conf_amarillo.jpg",
  "/static/images/home/mapa_chile.png",
];

function Homepage() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    // Hack para precargar las imagenes y mantener las optimizaciones q implementaba `AppContext`
    imagesToPreload.forEach((imageSource) => {
      const image = new Image();
      image.src = imageSource;
      window[image] = image;
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

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
            });`,
          }}
        />
      </Head>
      <Layout isReady={isReady}>
        <section className={styles.home}>
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
