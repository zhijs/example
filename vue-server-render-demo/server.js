//express server
const express = require('express');
const server = express();
const fs = require('fs');
const path = require('path');

//get renderer from vue server renderer
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const { createBundleRenderer } = require('vue-server-renderer')
// const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const renderer = createBundleRenderer(serverBundle, {
    //set template
  // clientManifest,
  template: fs.readFileSync('./index.html', 'utf-8')
});

server.use('/dist', express.static(path.join(__dirname, './dist')));

//start server
server.get('*', (req, res) => { 
    const context = {
        title: 'Vue JS - Server Render',
        meta: `
            <meta description="vuejs server side render">
        `
    };
    // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  renderer.renderToString(context, (err, html) => {
    // 处理异常……
    res.end(html)
  })
});  

server.listen(8080);