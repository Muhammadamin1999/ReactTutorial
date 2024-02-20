import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import ParentComponent from './components/ParentComponent';
import CounterM from './components/CounterM';

function App() {
  return (
    <div className="App">
   {/* <CounterOne/> */}
   {/* <CounterTwo/> */}
   {/* <ParentComponent/> */}
   <CounterM/>
    </div>
  );
}

export default App;
