import React from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne1 from './components/HookCounterOne1';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import HookMouse1 from './components/HookMouse1';
import MouseContainer from './components/MouseContainer';
import InteIntervalClassCounter from './components/InteIntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC'
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
     {/* <ClassCounter/> */}
     {/* <HookCounter/> */}
     {/* <HookCounterTwo/> */}
     {/* <HookCounterThree/> */}
     {/* <HookCounterFour/> */}
     {/* <ClassCounterOne/> */}
     {/* <HookCounterOne1/> */}
     {/* <ClassMouse/> */}
     {/* <HookMouse/> */}
     {/* <HookMouse1/> */}
     {/* <MouseContainer/> */}
     {/* <InteIntervalClassCounter/> */}
     {/* <IntervalHookCounter/> */}
     {/* <DataFetching/> */}
     {/* <UserContext.Provider value={'Wishwas'}>
      <ChannelContext.Provider value={'Code evolution'}>
      <ComponentC/>
      </ChannelContext.Provider>
    
     </UserContext.Provider> */}
     

    </div>
  );
}

export default App;
