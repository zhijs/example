<template>
  <div class="list-wrapper">
    <div v-for="i in 10" :key="i" class="item" @click="handleClick(i)">
      <input type="checkbox" v-if="selectState"/>
      <span class="text">{{"item" + i}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userId: '',
      selectIndex: 0
    }
  },
  mounted() {
    console.log('233333333333')
    // setTimeout(() => {
    //   this.userId = '2323232323'  
    // }, 1000)
  },
  computed: {
    selectState () {
      return this.$route.query.type === 'operate'
    }  
  },
  updated () {
    console.log('updated------', this.selectIndex)
  },
  methods: {
    handleClick (i) {
      console.log('click')
      if (!this.selectState) { // 进入编辑态
        this.selectIndex = i
        console.log(this.selectIndex)
        this.$router.push({path: '', query: {type:'operate'}})
      }
    }
  },  
}
</script>
<style lang="css">
  .list-wrapper {
    width: 300px;
    margin: 20px auto;  
  }
  .item {
    height: 50px;
    border-top: 1px solid #23232340;
    line-height: 50px;
    display: flex;
    align-items: center
  }
  .text {
    margin-left: 50px;  
  }
</style>