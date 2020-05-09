//express server
const express = require('express');
const server = express();
const fs = require('fs');
const path = require('path');

/**
 * server.js
 * 负责启动 server 服务，并对 vue 实例进行
 * 渲染成字符串，返回给浏览器
 */
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const { createBundleRenderer } = require('vue-server-renderer')
/**
 * 这里使用客户端的构建清单
 * render 会从这个清单的辨别资源
 * 然后将 CSS、Script 注入到 HTML 字符串中
 */
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const renderer = createBundleRenderer(serverBundle, {
  clientManifest, // 客户端构建清单
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
  renderer.renderToString(context, (err, html) => {
    res.end(html)
  })
});  
server.listen(8080);