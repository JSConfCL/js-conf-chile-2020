const path = require("path");
const withFonts = require("nextjs-fonts");

const routes = {
  "/": { page: "/" },
};

const appConfig = {
  /* config options here */
  trailingSlash: true,
  exportPathMap: function () {
    return routes;
  },
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      // your aliases
      "@components": path.join(__dirname, "components"),
      "@helpers": path.join(__dirname, "helpers"),
      "@styles": path.join(__dirname, "styles"),
    };
    return config;
  },
};

module.exports = {
  ...withFonts(appConfig),
  env: {
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    RECAPTCHA_PUBLIC_KEY: process.env.RECAPTCHA_PUBLIC_KEY,
  },
};
