import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('Clicked class')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Class</button>
      </div>
    )
  }
}

export default ClassClick
