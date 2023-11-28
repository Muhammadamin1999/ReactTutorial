import React, {Component} from "react";


class Counter extends Component{
        constructor(props){
            super(props);
            this.state={
                counter: 0,
            };
        }
handledClick = () =>{
    this.setState({counter: this.state.counter + 1});
}

    render(){
        return (
            <div>
            <p>you clicked {this.state.counter} times</p>
            <button onClick={this.handledClick}>Click Me</button>
            </div>

        )
    }
    
}

export default Counter;