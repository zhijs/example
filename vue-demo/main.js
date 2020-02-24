import Vue from 'vue'
import App from './App.vue'
export const app =  new Vue({
  el: '#app',
  render: (h) => h(App),
  data () {
    return {
      a: 'test'  
    }
  },
  created: () => {
    console.log('created----')
  },
  beforeMount: () => {
    console.log('beforeMount----')
  }
})