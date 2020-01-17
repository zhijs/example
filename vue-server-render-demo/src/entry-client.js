import { createApp } from './main.js';

// client-specific bootstrapping logic...

var app  = createApp().app
console.log(window.__INITIAL_STATE__)
app.$store.replaceState(window.__INITIAL_STATE__ || {}) 
// this assumes App.vue template root element has `id="app"`
debugger
app.$mount('#app')