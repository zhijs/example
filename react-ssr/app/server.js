/**
 * 服务端渲染模板
 * 主要负责，接受组件和模板（html），导出一个中间件函数
 */
import App from '../src/App.jsx'
import ReactDOMServer from 'react-dom/server'; 
export default async function (ctx) {
  const html =  ReactDOMServer.renderToString(App)
  console.log('html----', html)
  ctx.body = html
}