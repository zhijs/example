export default [
 {path: '/', component: () => import('./pages/list.vue')},
 {path: '/list', component: () => {
    console.log('debugger')
    return import('./pages/list2.vue')
  }},
  {path: '/list3', component: () => {
    console.log('debugger')
    return import('./pages/list3.vue')
  }}
]