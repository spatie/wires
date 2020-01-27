const withTM = require('next-transpile-modules');

module.exports = (nextConfig = {}) => {
    return withTM(['@spatie/wires'])({
        devIndicators: {
            autoPrerender: false,
        },
        ...nextConfig,
    });
};
