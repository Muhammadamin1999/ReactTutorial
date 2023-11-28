import React, {Component} from "react";

class UserStatus extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn : this.props.isLoggedIn, 
        };
    }

    render(){
        return(
            <div>
                <p>{this.state.isLoggedIn === true ? "Welcome" : "Please log in"}</p>
            </div>
        )
    }
}
export default UserStatus;


