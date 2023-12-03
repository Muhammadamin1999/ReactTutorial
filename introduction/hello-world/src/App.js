// import logo from './logo.svg';
// import React, {Component} from 'react';
// import './App.css';
// import MyGreet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheet from './components/Stylesheet';
// import Inline from './components/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form'

// function App() {
//   return (
//     <div className="App" >
//       <h1 className='error'>Error</h1>
//       <h1 className={styles.success}>Success</h1>
//       {/* <Inline/> */}
//       {/* <Stylesheet primary={true}/> */}
//     {/* <NameList/> */}
//       {/* <UserGreeting/> */}
//       {/* <ParentComponent/> */}
//       {/* <EventBind/> */}
//       {/* <FunctionClick />
//       <ClassClick/> */}
//       {/* <Counter/> */}
//       {/* <Message /> */}
//       {/* <MyGreet name="Bruce" heroName="Batman">
//         <p>THis is children props</p>
//       </MyGreet>
//       <MyGreet name="Clark" heroName="Superman">
//         <button>Action</button>
//       </MyGreet>

//       <Welcome name="Bruce" heroName="Batman"/>
//       <Welcome name="Clark" heroName="Superman"/> */}
//       {/* <Hello/> */}
//     </div>
//   );
// }

// export default App;

import React, {Component} from 'react'
import './App.css'
import Form from './components/Form'
import FragmentDemo from './components/FragmentDemo';
import Table from "./components/Table";
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FrParentInput from './components/FrParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User'
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
class App extends Component{
  render(){
    return(
      <div className='App'>
       {/* <FragmentDemo/> */}
       {/* <Table/> */}
       {/* <ParentComp/> */}
       {/* <RefsDemo/> */}
       {/* <FocusInput/> */}
       {/* <FrParentInput/> */}
       {/* <PortalDemo/> */}
       {/* <ErrorBoundary>
       <Hero heroName="Batman"/>
       <Hero heroName="Superman"/>
       <Hero heroName="Joker"/>
       </ErrorBoundary> */}
       {/* <ClickCounter name="Vishwas"/>
       <HoverCounter/> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn)=> isLoggedIn ? "Voshwas" : "Guest"}/> */}
      {/* <CounterTwo render={(count, incrementCount)=> <ClickCounterTwo count={count} incrementCount={incrementCount}></ClickCounterTwo>}/>
      <HoverCounterTwo render={(count, incrementCount)=> <HoverCounterTwo count={count} incrementCount={incrementCount}></HoverCounterTwo>}/> */}
       <UserProvider value="Amin">
       <ComponentC/>
       </UserProvider>
       
      </div>
    )
  }
}
export default App;