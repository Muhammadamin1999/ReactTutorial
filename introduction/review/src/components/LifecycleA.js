import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Amin'
    }
    console.log('Lifecycle A')
  }
  static getDerivedStateFromProps(props,state){
    console.log('LifeCycleA derived from props');
    return null
  }
  componentDidMount(){
    console.log('lifecycle A component did mount')
  }
  shouldComponentUpdate(){
    console.log('LifecycleA shouldComponent Update')
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifecycleA getSapshotBeforeUpdate')
    return null
  }
  componentDidUpdate(){
    console.log('LifecycleA componentDidUpdate')
  }
changeState = () => {
  this.setState({
    name: 'Code evolution'
  })
}
  render() {
    console.log('Lifecycle A renders')
    return (
    <div>
<div>Lifecycle A</div>
<button onClick={this.changeState}>Change state</button>
<LifecycleB/>
    </div>
    )
  
  }
}

export default LifecycleA
