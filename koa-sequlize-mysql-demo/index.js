const Koa = require('koa')
const router = require('./router/index')
const app = new Koa();
const koaBody = require('koa-body')

// body 参数解析中间件
app.use(koaBody())

// 路由注册
router(app)

app.listen(9003)