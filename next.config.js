const path = require("path");
const withFonts = require("nextjs-fonts");

console.log(process.env);

const routes = {
  "/": { page: "/" },
};

const appConfig = {
  /* config options here */
  exportTrailingSlash: true,
  exportPathMap: function () {
    return routes;
  },
  webpack(config, options) {
    config.resolve.alias["@components"] = path.join(__dirname, "components");
    config.resolve.alias["@helpers"] = path.join(__dirname, "helpers");
    config.resolve.alias["@styles"] = path.join(__dirname, "styles");
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
