var handler = {
  get(target, key, receiver) {
    console.log('get---', key)
    return target[key]
  },
  set (target, key, value, receiver) {
    target[key] = value
    console.log('set----', key)
    return true
  }
}
// const p = new Proxy({a: {b: 3}}, handler)
// p.a.b = 3 // get---a, 无法触发 a, b 属性 的 set

function  reactive(data, cb) {
  let timer = null
  return new Proxy(data, {
    get (target, key, receiver) {
      return Reflect.get(target, key, receiver)
    },
    set (target, key, value, receiver) {
      if (timer !== null) {
        clearTimeout(timer)  
      }
      timer = setTimeout(()=> {
        cb && cb() 
      }, 0)
      return Reflect.set(target, key, value, receiver) 
    }
      
  })  
}
// let p = reactive([1,2], () => {
//   console.log('set---')
// })
// p.push(3)

function deepReactive(data, cb) {
  let res = null
  let timer = null;
  res = ((data instanceof Array) ? [] : {}) 
  for(let key in data) {
    if (typeof data[key] === 'object') {
      res[key] = deepReactive(data[key], cb)  
    } else {
      res[key] = data[key]  
    }
  }
  return new Proxy(res, {
    get(target, key) {
      return Reflect.get(target, key)  
    },
    set (target, key ,value) {
      if (timer !== null) {
        clearTimeout(timer)  
      }else {
        timer = setTimeout(() => {
          cb && cb()  
        }, 0)  
      }
      return Reflect.set(target, key, value)
    }
  })
}
const p = deepReactive({a: {b: {c:1}}}, () => {
  console.log('set----')  
})
p.a.b.c = 3 // set----