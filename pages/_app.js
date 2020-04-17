import React from "react";
import App from "next/app";
import Router from "next/router";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import "@styles/variables.scss";
import "@styles/font.scss";
import "@styles/style.scss";
import "@styles/loader.scss";

import { AnimatePresence } from "framer-motion";
import AppContextProvider from "@helpers/appContext";
import { pageview } from "../lib/googleAnalytics";

Router.events.on("routeChangeComplete", (url) => pageview(url));

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    // <Component/> returns the component it self
    // pageProps returns the props you use to in that component. It can be any data
    // router.route returns the route your component lives on. So in our case it will be '/' or '/products/[id]'
    // exitBeforeEnter: AnimatePresence will only render one component at a time. The exiting component will finished its exit animation before the entering component is rendered
    return (
      <AppContextProvider>
        <GoogleReCaptchaProvider reCaptchaKey="6LdfR-oUAAAAAHZ7qMBCS85ZoALGOUSAhVEoUFuZ">
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </GoogleReCaptchaProvider>
      </AppContextProvider>
    );
  }
}

export default MyApp;
