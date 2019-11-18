const fn1 = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('fn1 start')
      resolve()
      console.log('fn1 end')
    }, 1000);
  })
}

const fn2 = function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('fn2 start')
        resolve()
        console.log('fn2 end')
      }, 1000);
    })
  }


const fn3 = function () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('fn3 start')
        resolve()
        console.log('fn3 end')
      }, 1000);
    })
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
