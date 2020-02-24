const koa = require('koa')
const Upload = require('./upload.js')
const app = new koa()

const upload = new Upload()
// 中间件1
app.use(async  (ctx, next) => {
  console.log('中间件1 start')
  ctx.res.state = []
  await next()
  console.log(ctx.res.state)
  ctx.res.state.push('state1')
  console.log('中间件1 end')
  ctx.body = {
   state: ctx.res.state
  }
})

// 中间件2
app.use(async (ctx, next) => {
    console.log('中间件2 start')
    await next()
    console.log(ctx.res.state)
    ctx.res.state.push('state2')
    console.log('中间件2 end')
    // ctx.body = {
    //   result: '中间件2' 
    // }
  })

  // 中间件3
// app.use(async (ctx, next) => {
//     console.log('中间件3 start')
//     console.log(ctx.req.state)
//     ctx.res.state = ['state3']
//     console.log('中间件3 end')
//     ctx.body = {
//       result: '中间件3' 
//     }
//   })
app.use(upload.handler.bind(upload))
app.listen(9002)