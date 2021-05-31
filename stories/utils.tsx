export const requireContextPolyfill = () => {
  if (process.env.NODE_ENV === 'test') {
    const fs = require('fs');
    const path = require('path');

    require.context = (
      base = '.',
      scanSubDirectories = false,
      regularExpression = /\.js$/
    ) => {
      const files = {};

      function readDirectory(directory) {
        fs.readdirSync(directory).forEach((file) => {
          const fullPath = path.resolve(directory, file);

          if (fs.statSync(fullPath).isDirectory()) {
            if (scanSubDirectories) readDirectory(fullPath);

            return;
          }

          if (!regularExpression.test(fullPath)) return;

          files[fullPath] = true;
        });
      }

      readDirectory(path.resolve(__dirname, base));

      function Module(file) {
        return require(file);
      }

      Module.keys = () => Object.keys(files);

      return Module;
    };

    return require.context;
  }
};

export const envIs = (env) => {
  return process.env.NODE_ENV === env;
};
