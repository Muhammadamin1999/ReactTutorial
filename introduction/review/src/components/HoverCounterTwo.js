import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
    
  render() {
    const {count, incrementCount} = this.props
    return (
      
    <h2 onMouseOver={incrementCount}>Howered {count} times</h2>
    )
  }
}

export default HoverCounterTwo
