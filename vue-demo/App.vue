<template>
  <div @click="handleClick">{{message}}</div>
</template>
<script>
  export default {
    data () {
      return {
         message: 'hellow world' 
      }
    },
    created() {
      console.log('components----create')
    },
    beforeMount() {
      console.log('components----beforeMounted')
    },
    methods: {
      handleClick () {
        console.log('handleClick')  
      }
    },
  }
</script>
