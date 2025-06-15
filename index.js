const { createServer } = require('http');
const app = require('./dist/index');

module.exports = (req, res) => {
  const server = createServer(app);
  server.emit('request', req, res);
};
