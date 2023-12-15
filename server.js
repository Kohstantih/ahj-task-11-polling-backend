const http = require('http');
const Koa = require('koa');
const { koaBody } = require('koa-body');
const cors = require('@koa/cors');
const router = require('./routes');

const app = new Koa();

app.use(cors('Access-Control-Allow-Origin', '*'));

app.use(koaBody({
  urlencoded: true,
}));

app.use(router());

const server = http.createServer(app.callback());
const port = process.env.PORT || 7000;



server.listen(port, (err) => {
    if (err) {
      return console.log('Error occured:', err)
    }
    console.log(`server is listening on ${port}`)
  });
  