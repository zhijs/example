const koa = require('koa')

const app = new koa()

// 中间件1
app.use(async  (ctx, next) => {
  console.log('中间件1 start')
   next()
  console.log('中间件1 end')
  ctx.body = {
   result: '中间件1' 
 }
})

// 中间件2
app.use(async (ctx, next) => {
    console.log('中间件2 start')
    await next()
    console.log('中间件2 end')
    ctx.body = {
      result: '中间件2' 
    }
  })

  // 中间件3
app.use(async (ctx, next) => {
    console.log('中间件3 start')
    console.log('中间件3 end')
    ctx.body = {
      result: '中间件3' 
    }
  })

  app.listen(9002)