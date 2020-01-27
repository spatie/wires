const withTM = require('next-transpile-modules');

module.exports = (nextConfig = {}) => {
    return withTM({
        transpileModules: ['@spatie/wires'],

        ...nextConfig,
    });
};
