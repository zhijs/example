export default ({ app }) => {
 app.router.beforeEach((to, from, next) => {
   console.log('路由进入 to---', to)
   // 加载当前路由需要的 css 样式
   next()
 })
 app.router.afterEach((to, from) => {
   console.log('路由进入完成--------')
   // 删除多余 css 样式

 })
}