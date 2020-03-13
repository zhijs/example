<template>
  <div class="container">
    <p class="index">index1</p>
    <page-com1></page-com1>
    <router-link to="/page2/">点击跳转page2</router-link>
    <router-link to="/page3/">点击跳转page3</router-link>
    <router-link to="/page3/review?a=22">点击跳转page3/review</router-link>
  </div>
</template>

<script>
import  '@/assets/index1.css'
import  '@/assets/common.css'
import PageCom1 from '@/components/page-com1.vue'
export default {
  components: {
    PageCom1  
  },
  beforeUpdate() {
    console.log('beforeUpdate--')
  },
}
</script>

<style>
.index_style {
  padding: 1px  
}
</style>
