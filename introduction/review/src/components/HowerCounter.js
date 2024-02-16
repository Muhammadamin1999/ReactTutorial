import React, { Component } from 'react'
import withCounter from './withCounter'
class HowerCounter extends Component {

    
  render() {
    const {count,incrementCount} = this.props
    return <h2 onMouseOver={incrementCount}> Howered {count} times</h2>
    
  }
}

export default withCounter(HowerCounter,10) 
