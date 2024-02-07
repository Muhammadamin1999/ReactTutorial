import Greet from './components/Greet'
import './App.css';
import { Component } from 'react';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Hellow from './components/HelloHTML';
import Message from './components/Message';
import Counter from './components/Counter';
class App extends Component {
  render(){
    return (
      <div className="App">
    {/* <Greet name="Bruce" heroName = "Batman">
    <p>These will be children props</p>  
    </Greet>
    <Greet name="Clark" heroName = "Superman">
      <button>Button</button>
    </Greet>
    <Greet name="Diana" heroName = "Wonder woman"/>
    <Welcome name="Bruce" heroName = "Batman">
    <p>These will be children props</p>  
    </Welcome>
    <Welcome name="Clark" heroName = "Superman">
      <button>Button</button>
    </Welcome>
    <Welcome name="Diana" heroName = "Wonder woman"/> */}
  {/* <Message /> */}
    {/* <Welcome/>
    <Hello/>
    <Hellow/> */}
    {/* <Counter/> */}
    <Greet name="Hg" heroName="kl"/>
      </div>
    )
  }

  

}

export default App;
