const path = require("path");
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
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
        },
      },
    });
    return config;
  },
};

module.exports = withFonts(appConfig);
