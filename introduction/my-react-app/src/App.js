
import './App.css';
import React, {Component, useState} from "react";
import Header from "./components/Header";
import MyComponent from "./components/MyComponent";
import MyComponentClass from "./components/MyComponentClass";
import Greeting from "./components/Greeting";
import Counter  from './components/Counter';
import UserStatus from './components/UserStatus';
import CounterUseState from "./components/CounterUseState";
import Toggle  from './components/Toggle';
import UserList from './components/UserList';
import DataFetcher from './components/DataFetcher';
import LifecycleExample from './components/LifecycleExample';
import Page from "./components/Page";
import Modal from "./components/Modal";
function App(){
  const [title, setTitle] = useState(true);
  const users = ["Ali", "Vali", "Hali"];
  return(
    <div>
    {/* <Header title={title}/>
  
    <MyComponent  />
    <MyComponentClass/> */}
    {/* <Greeting name="John"/>
    <Counter/> */}
    {/* <UserStatus isLoggedIn = {true}/>
    <CounterUseState/>
    <Toggle/>
    <UserList users={users}/>
    <DataFetcher/> */}
    {/* <LifecycleExample/> */}
    {/* <Page/> */}
    <Modal/>
    </div>
  )
}


export default App;
