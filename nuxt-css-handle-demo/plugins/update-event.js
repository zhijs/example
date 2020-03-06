import Vue from 'vue'

function evenPlugin(Vue) {
  console.log('plugin---', this)
}
Vue.use(evenPlugin)