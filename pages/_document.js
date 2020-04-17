// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es">
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          // Necesitamos pasarle un valor al attributo, para que se agregue al dom, si no, es solamente interpretado por React
          crossOrigin="true"
        />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
