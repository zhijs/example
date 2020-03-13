<template>
  <div>
    <count :count="count1" @changeCount="handleChangeCount"></count>
    <div>父 count</div>
  </div>
  
</template>
<script>
  import count from './components/count'
  export default {
    data () {
      return {
         message: 'hellow world',
         count1: 0
      }
    },
    components: {
      count
    },
    created() {
      console.log('App components----create')
    },
    beforeMount() {
      console.log('App components----beforeMounted')
    },
    mounted() {
      console.log('App components----mounted')
    },
    beforeUpdate() {
      console.log('Appvue breforeUpdate')
    },
    updated() {
      console.log('Appvue updated----')
    },
    methods: {
      handleChangeCount (newCount) {
        console.log('handleChangeCount--', newCount)
        this.count1 = newCount
      }
    },
  }
</script>
