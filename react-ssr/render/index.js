const Koa = require('koa');
const app = new Koa();
const render = require('../dist/server.bundle').default;
app.use(render);

app.listen(3000);