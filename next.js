const withCSS = require("@zeit/next-css");
const withTM = require("next-plugin-transpile-modules");

module.exports = (nextConfig = {}) =>
  withCSS(
    withTM({
      transpileModules: ["@spatie/wires"],

      ...nextConfig
    })
  );
