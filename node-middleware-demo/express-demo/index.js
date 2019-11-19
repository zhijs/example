const express = require('express')

const app = new express()

// 中间件1
app.use((req, res, next) => {
  console.log('中间件1 start')
  next()
  console.log(res.state)
  res.state.push('state1')
  console.log(res.state)
  console.log('中间件1 end')
  res.json({
   result: res.state
 })
})

// 中间件2
app.use((req, res, next) => {
    console.log('中间件2 start')
    next()
    // res.json({
    //   result: '中间件2' 
    // })
    console.log(res.state)
    res.state.push('state2')
    console.log('中间件2 end')
  })

  // 中间件3
app.use((req, res, next) => {
    console.log('中间件3 start')
  //   res.json({
  //     result: '中间件3' 
  //  })
    console.log('中间件3 end')
    res.state = ['state3']
  })

  app.listen(9001)