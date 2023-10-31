import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import MyGreet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
function App() {
  return (
    <div className="App" >
      <FunctionClick />
      <ClassClick/>
      {/* <Counter/> */}
      {/* <Message /> */}
      {/* <MyGreet name="Bruce" heroName="Batman">
        <p>THis is children props</p>
      </MyGreet>
      <MyGreet name="Clark" heroName="Superman">
        <button>Action</button>
      </MyGreet>

      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
