const path = require("path");
const withSass = require("@zeit/next-sass");
const withFonts = require("nextjs-fonts");

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

module.exports = withFonts(withSass(appConfig));
