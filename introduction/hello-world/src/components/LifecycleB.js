import React, {Component} from "react";

class LifecycleB extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Amin"
      }
    }
    static getDerivedStateFromProps(props, state){
        return null;
    }

    componentDidMount(){
        
    }
    
    render(){
        return(
          <div>
         Lifecycle A
          </div>
        )
    }
}