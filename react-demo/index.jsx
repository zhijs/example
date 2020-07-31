/**
 * HOC 高阶组件
 * 所有需要方法(功能) 和 username (数据)
 * 的组件都可以通过这个函数生成，以此达到数据和功能的复用
 */
function wrapperComponents(Com) {
  return class extends React.Component{
    constructor() {
      super()
      this.state = {
        username: 'lili' // 组件都需要用到的数据
      }  
    }
    log (msg) { // 组件都需要用到的方法
      console.log(msg)  
    }
    render() {
      return (<Com name={this.state.name} log={this.log}></Com>)  
    }
  }  
}