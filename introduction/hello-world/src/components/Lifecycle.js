import React, {Component} from "react";
import LifecycleB from "@/components/LifecycleB"
class Lifecycle extends Component{
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
        
         <div>
         Lifecycle A
         </div>
         <LifecycleB />
          </div>
        )
    }
}