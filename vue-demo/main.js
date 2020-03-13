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
    console.log('main created----')
  },
  beforeMount: () => {
    console.log('main beforeMount----')
  },
  mounted () {
   console.log('main mounted----')
  },
  beforeUpdate() {
   console.log('main breforeUpdate')
  },
  updated() {
    console.log('main updated----')
  }
})