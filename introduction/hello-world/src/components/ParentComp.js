import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Amin"
      }
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name:"Amin"
            })
        }, 2000)
    }
    
  render() {
    return (
      <div>
        Parent Component
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
