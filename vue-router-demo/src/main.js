import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
const router = new VueRouter({
  routes
})
Vue.config.productionTip = false
Vue.use(VueRouter)
debugger
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
