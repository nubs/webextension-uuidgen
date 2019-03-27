const path = require('path');

module.exports = {
  entry: {
    uuidgen: './src/uuidgen.js',
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'extension'),
    filename: 'uuidgen.js',
  }
};
