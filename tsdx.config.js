
  const url = require('@rollup/plugin-url');
  const svgr = require('@svgr/rollup').default;
  module.exports = {
    rollup(config, options){
      if (config.output.format === 'umd') {
        // maybe push popper in globals?
      }
      config.plugins = [
        url(),
        svgr({
          // configure however you like, this is just an example
          ref: true,
          memo: true,
          svgoConfig: {
            plugins: [
              { removeViewBox: false },
              { removeAttrs: { attrs: 'g:(stroke|fill):((?!^none$).)*' } }
            ],
          },
        }),
        ...config.plugins,
      ];
      return config;
    }
  }