const Router = require('koa-router');
const router = new Router();
const models = require('../model/index')
const student = models.student

router.post('/student/add', async(ctx, next) => {
  const { name, number, age, classNumber, subjects } = ctx.request.body
  let ret
  let error 
  try {
    ret = await student.create({
      name,
      number,
      age,
      classNumber,
      subjects // 注意这里属性是复数形式 
    }, {
      include: [models.subject]
    })
  }catch(e) {
    console.log(e)
    error = e
  }
  if (ret) {
    ctx.body = {
      code: 0,
      data: ret  
    }
  } else {
    ctx.body = {
      code: -1,
      data: error  
    }
  }
})

// 删
router.delete('/student/delete', async(ctx, next) => {
  const id = ctx.query.id
  let ret
  let error 
  try {
    ret = await student.destroy({
      cascade: true,
      where: {
        id  
      }
    })
    console.log(ret.subject)
  }catch(e) {
    console.log(e)
    error = e
  }
  if (ret) {
    ctx.body = {
      code: 0,
      data: ret  
    }
  } else {
    ctx.body = {
      code: -1,
      data: error  
    }
  }
})

// 改
router.post('/student/update/:id', async(ctx, next) => {
  const keys = ['name', 'number', 'age', 'classNumber']
  const id = ctx.params.id
  let obj = {}
  keys.map((key) => {
    if (ctx.request.body[key] !== undefined) {
      obj[key] = ctx.request.body[key]
    }
  })
  let ret
  let error 
  try {
    ret = await student.update(obj, {
      where: {
        id 
      }
    })
  }catch(e) {
    error = e.error
  }
  if (ret) {
    ctx.body = {
      code: 0,
      data: ret  
    }
  } else {
    ctx.body = {
      code: -1,
      data: error  
    }
  }
})

// 查
router.get('/student/get', async(ctx, next) => {
  const id = ctx.query.id
  let ret
  let error 
  try {
    ret = await student.findOne({
      where: {
        id 
      }
    })
  }catch(e) {
    error = e.error
  }
  if (ret) {
    ctx.body = {
      code: 0,
      data: ret  
    }
  } else {
    ctx.body = {
      code: -1,
      data: error  
    }
  }
})
module.exports = router