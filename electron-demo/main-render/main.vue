<template>
  <div class="wrapper">
    <button @click="quitOut">关闭应用</button>
    <button @click="selectFile">读取 mian.js 文件</button>
    <button @click="notify">发送通知</button>
  </div>
</template>
<script>
const { ipcRenderer } = __non_webpack_require__('electron');
const remote = __non_webpack_require__('electron').remote;
export default {
  mounted() {
    // 监听主进程回复事件
    ipcRenderer.on('fileData', (event, data) => {
      console.log(data)  
    })
    console.log(remote)
  },
  methods: {
    async selectFile () {
      // 通知主进程
      ipcRenderer.send('readFile', {
        name: 'main.js' 
      })
    },
    notify () {
      ipcRenderer.send('notification', {
        title: '你好',
        body: '来自渲染进程的问候'
      })
    },
    quitOut () {
      remote.app.quit()
    }
  }
}
</script>
<style lang="scss">
  .wrapper {
    > button {
      color: aqua;  
    }  
  }
</style>