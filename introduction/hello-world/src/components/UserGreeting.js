import React, { Component } from 'react'

class UserGreeting extends Component {
constructor(props) {
  super(props)

  this.state = {
     isLoggedIn: false
  }
}


  render() {

    // short circuit operator
    return this.state.isLoggedIn && <div>Welcome Amin</div>
    // return (
    //     this.state.isLoggedIn ?
    //     <div>Welcome Amin</div> :
    //     <div>Welcome Guest</div>
    // )

    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Vishwas</div>
    // }else{
    //     message = <div>Weolcome Guest</div>
    // }

    // return <div>{message}</div>
    // if(this.state.isLoggedIn){
    //     return (
    //         <div>
    //             Welcome Vishwas
    //         </div>
    //     )
    // }else{
    //     return (
    //         <div>Welcome guest</div>
    //     )
    // }
    // return (
    //     <div>
    //  <div>Welcome Amin</div>
    //  <div>Welcome Guest</div>
    //     </div>
 
    // )
  //}
}
}

export default UserGreeting
