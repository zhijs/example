const fn1 = async  (ctx, next) => {
  console.log('中间件1 start')
  await fn2()
  console.log('中间件1 end')
}

const fn2 = async (ctx, next) => {
 console.log('中间件2 start')
 await fn3()
 console.log('中间件2 end')
}


const fn3 = async (ctx, next) => {
 console.log('中间件3 start')
 console.log('中间件3 end')
}



/** 
 * 要求一条语句执行，并输出
 * fn1 start 
 * fn2 start 
 * fn3 start 
 * fn3 end
 * fn2 end
 * fn1 end
 *  */

 Promise.resolve(fn1())
