import {h, Component} from 'preact'
// import image3 from '../assets/images/3.jpeg'
export default class A extends Component {
  constructor (props) {
    super(props)
    console.log('child constructor------') 
  }
  componentDidMount () {
    console.log('component didmount')
    this.timer = setInterval (() => {
      if (this.props.count >= 10) {
        clearInterval(this.timer)
      }      
      this.props.setCount()
    }, 1000)  
  }
  render () {
    return <div>child Component----count: {this.props.count}
      {/* <img src={image3} alt=""/> */}
    </div>  
  }  
}