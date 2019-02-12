const withCSS = require("@zeit/next-css");
const withTM = require("next-plugin-transpile-modules");

module.exports = withCSS(
  withTM({
    transpileModules: ["@spatie/wires"],

    target: "serverless"
  })
);
