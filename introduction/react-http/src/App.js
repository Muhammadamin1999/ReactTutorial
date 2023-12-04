import logo from './logo.svg';
import './App.css';

// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterOneEffect from './components/HookCounterOneEffect';
// import ClassCounterOne from './components/ClassCounterOne';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
//import DataFetching  from './components/DataFetching';
import ComponentsC from './components/ComponentsC';

// eslint-disable-next-line no-undef
export const UserContext = React.createContext();
// eslint-disable-next-line no-undef
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
     {/* <ClassCounter/> */}
     {/* <HookCounter/> */}
     {/* <HookCounterTwo/> */}
     {/* <HookCounterThree/> */}
     {/* <HookCounterFour/> */}
     {/* <HookCounterOneEffect/> */}
     {/* <ClassCounterOne/> */}
     {/* <HookMouse/> */}
     {/* <MouseContainer/> */}
     {/* <IntervalClassCounter/> */}
     {/* <IntervalHookCounter/> */}
     {/* <DataFetching/> */}
     <UserContext.Provider value={'Vishwas'}>
      <ChannelContext.provider value = {'Codevolution'}>
      <ComponentsC/>
      </ChannelContext.provider>
     
     </UserContext.Provider>

    </div>
  );
}

export default App;
