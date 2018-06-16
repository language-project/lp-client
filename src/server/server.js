const path = require('path');

const SERVER_PATH = process.env.NODE_ENV === 'production' 
  ? path.resolve(__dirname, 'server.prod')
  : path.resolve(__dirname, 'server.dev');

module.exports = require(SERVER_PATH);
