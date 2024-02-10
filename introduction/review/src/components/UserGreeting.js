import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {
    return this.state.isLoggedIn && <div>Welcome Subhan</div>
    // return (
    //     this.state.isLoggedIn ?
    //      <div>Welcome Subhan</div> :
    //      <div>Welcome Guest</div>

    // )
    // let message 
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Subhan</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>
    // if(this.state.isLoggedIn){
    //     return (
    //         <div>
    //             Welcome Subhan
    //         </div>
    //     )
    // }else{
    //     return (
    //         <div>
    //             Welcome guest
    //         </div>
    //     )
    // }
//     return (
//       <div>
//         <div>Welcome Subhan</div>
//         <div>Welcome Guest</div>
//       </div>
//     )
  }
}

export default UserGreeting
