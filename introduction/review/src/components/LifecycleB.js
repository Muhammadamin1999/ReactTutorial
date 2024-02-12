import React, { Component } from 'react'

class LifecycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Amin'
    }
    console.log('Lifecycle B')
  }
  static getDerivedStateFromProps(props,state){
    console.log('LifeCycleB derived from props');
    return null
  }
  componentDidMount(){
    console.log('lifecycle B component did mount')
  }

  shouldComponentUpdate(){
    console.log('LifecycleB shouldComponent Update')
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifecycleB getSapshotBeforeUpdate')
    return null
  }
  componentDidUpdate(){
    console.log('LifecycleB componentDidUpdate')
  }
  
  render() {
    console.log('LifecycleB renders')
    return (
    <div>Lifecycle B</div>)
  }
}

export default LifecycleB
