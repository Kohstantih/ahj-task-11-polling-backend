const combineRouters = require('koa-combine-routers');
const messages = require('./messages');

const router = combineRouters(
    messages,
  );
  
  module.exports = router;