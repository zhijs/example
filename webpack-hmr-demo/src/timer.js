export default function startTimer () {
  var i = 0;
  var timer;
  timer = setInterval(() => {
    console.log('timer running-----', i)
    i = i + 1
    if (i === 10) {
      clearInterval(timer)  
    }  
  }, 1000)  
}