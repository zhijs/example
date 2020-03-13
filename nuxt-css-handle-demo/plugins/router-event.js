export default ({ app }) => {
 if (typeof window.getRouteMapCssFile === 'undefined') return
 const getRouteMapCssFile = window.getRouteMapCssFile
 app.router.beforeEach((to, from, next) => {
   const chunName = pathToChunkName(to.path)
   let { cssChunk, all } = getRouteMapCssFile(chunName)
   if (!all[chunName]) return next()
   setCurrentCssFile(cssChunk)
   next()
 })
 app.router.afterEach((to, from) => {
   if (to.path !== from.path) {
     const chunName = pathToChunkName(from.path)
     let { cssChunk, all } = getRouteMapCssFile(chunName)
     if (!all[chunName]) return
     removeCssFile(cssChunk)
   }
 })
}
// pathName 转化为 chunName
function pathToChunkName (pathName) {
 let paths = pathName.split('/')
 paths[0] = 'pages'
 if (paths[paths.length - 1] === '') {
   paths[paths.length - 1] = 'index'
 }
 return paths.join('_')
}

function setCurrentCssFile (path) {
 const head = document.querySelector('head')
 const link = document.querySelectorAll('link')
 let hasStyle = false
 for (let i = 0, len = link.length; i < len; i++) {
   if (link[i].getAttribute('href') === path && link[i].getAttribute('rel') === 'stylesheet') {
     hasStyle = true
     break
   }
 }
 if (!hasStyle) {
   let newLink = document.createElement('link')
   newLink.setAttribute('rel', 'stylesheet')
   newLink.setAttribute('href', path)
   head.appendChild(newLink)
 }
}

function removeCssFile (path) {
 const head = document.querySelector('head')
 const link = document.querySelectorAll('link')
 for (let i = 0, len = link.length; i < len; i++) {
   if (link[i].getAttribute('href') === path && link[i].getAttribute('rel') === 'stylesheet') {
     head.removeChild(link[i])
     break
   }
 }
}
