var path = require('path');

module.exports = {
  entry: './example/index.js',
  babelLoaderDir: [path.join(__dirname, './src')]
};