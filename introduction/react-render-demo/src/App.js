import logo from './logo.svg';
import './App.css';
import { UseState } from './components/UseState/UseState';
import UseReducer, { useReducer } from './components/UseReducer/UseReducer';
import { ObjectUseState } from './components/ImmutableState/ObjectUseState';
import { ArrayUseState } from './components/ImmutableState/ArrayUseState';
import { Parent } from './components/ParentChild/Parent';

function App() {
  
  return (
    <div className="App">
     {/* <UseState/>  */}
     {/* <UseReducer/> */}
     {/* <ObjectUseState/> */}
     {/* <ArrayUseState/> */}
     <Parent/>
    </div>
  );
}

export default App;
