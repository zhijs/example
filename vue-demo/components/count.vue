<template>
 <div>
    {{count}} <span @click="$emit('changeCount', count + 1)">+</span>
 </div>
</template>
<script>
export default {
  props: {
    count: {
      type: Number 
    }
  },
  data () {
    return {
    } 
  },
  beforeUpdate() {
    console.log('count breforeUpdate')
  },
  updated() {
    console.log('count updated----')
  }
}
</script>