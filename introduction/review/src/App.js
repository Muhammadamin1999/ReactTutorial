import Greet from './components/Greet'
import './App.css';
import { Component } from 'react';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Hellow from './components/HelloHTML';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Style from './components/Style';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import Portal from './components/Portal';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HowerCounter from './components/HowerCounter';
import ClickCountertwo from './components/ClickCountertwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import User from './components/User';
import ComponentC from './components/ComponentC'
import {UserProvider} from './components/userContext'
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
    
    {/* <Greet name="Hg" heroName="kl"/> */}
    {/* <FunctionClick/>
    <ClassClick/> */}
    {/* <EventBind/> */}
    {/* <ParentComponent/> */}
    {/* <UserGreeting/> */}
    {/* <NameList/> */}
    {/* <Stylesheet primary={true}/> */}
    {/* <Style/> */}
    {/* <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1> */}
    {/* <Form/> */}
    {/* <LifecycleA/> */}
    {/* <FragmentDemo/> */}
    {/* <Table/> */}
    {/* <PureComp/> */}
    {/* <ParentComp/> */}
    {/* <RefsDemo/> */}
    {/* <FocusInput/> */}
    {/* <FRParentInput/> */}
    {/* <Portal/> */}
    {/* <ErrorBoundary>
    <Hero heroName='Batman'/>
   </ErrorBoundary>
   <ErrorBoundary>
    <Hero heroName='Joker'/>
    </ErrorBoundary> */}
    {/* <ClickCounter name='wishwas'/>
    <HowerCounter/> */}
    {/* <ClickCountertwo/> */}
    {/* <HoverCounterTwo/>
    <User render={(isLoggedIn)=> isLoggedIn ?  'Wishwas': 'Guest'}/> */}
    {/* <Counter render={(count, incrementCount)=>(<ClickCountertwo count={count} incrementCount={incrementCount}/>)}/>
    <Counter render={(count, incrementCount)=>(<HoverCounterTwo count={count} incrementCount={incrementCount}/>)}/> */}
     {/* <UserProvider value='Wishwas'>
     <ComponentC/>
     </UserProvider> */}
     
      </div>
    )
  }

  

}

export default App;
