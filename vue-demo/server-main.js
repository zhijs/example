const express = require('express');
const server = express();
const fs = require('fs');
const path = require('path');
const app = require('./main.js').app
const renderer = require('vue-server-renderer').createRenderer({
  //set template
  template: fs.readFileSync('./index.html', 'utf-8')
});

server.get('*', (req, res) => { 
   debugger
   renderer.renderToString(app, function (err, html) {   
     if (err) {
       console.log('error')
       console.log(err)
       if (err.code === 404) {
         res.status(404).end('Page not found')
       } else {
         res.status(500).end('Internal Server Error')
       }
     } else {
       res.end(html)
     }
   });         
}); 
server.listen(8080);