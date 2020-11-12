import print from './print'
const btn = document.createElement('button');
btn.innerHTML = 'Click me and check the console!';
btn.onclick = print;
document.body.appendChild(btn);

console.log('module---hot', module.hot)
if (module.hot) {

   module.hot.accept('./print.js', function() {
       console.log('Accepting the updated printMe module!');
       print();
   })
}