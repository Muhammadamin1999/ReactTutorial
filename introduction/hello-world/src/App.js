import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import MyGreet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
function App() {
  return (
    <div className="App">
      {/* <MyGreet/>
      <Welcome/> */}
      <Hello/>
    </div>
  );
}

export default App;
