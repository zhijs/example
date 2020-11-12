import {h, Component} from 'preact'
import A from './components/A.jsx'
import image1 from './assets/images/1.jpeg?base64=1'
// import image2 from './assets/images/2.jpeg'
export default class App extends Component {
  constructor () {
    super()
    this.state = {
      childShow: false,
      count: 1  
    }
  }
  setCount () {
    this.setState({
      count: this.state.count + 1  
    })  
  }
  render () {
    return <div>
      <button onClick ={() => {
        this.setState({
          childShow: !this.state.childShow  
        })  
      }}>{this.state.childShow ? '隐藏子组件' : '显示子组件'}</button>
       <div style = {`display: ${this.state.childShow ? 'block' : 'none'}`}>
        <A count={this.state.count} setCount={this.setCount.bind(this)}/>
        <img src={image1} alt=""/>
        {/* <img src={image2} alt=""/> */}
       </div>
    </div>  
  }  
}