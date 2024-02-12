import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('*************Reg Comp render*****************')

    return (
      <div>
        Regular Comp {this.props.name}
      </div>
    )
  }
}

export default RegComp
