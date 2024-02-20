import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import ParentComponent from './components/ParentComponent';
import CounterM from './components/CounterM';
import FocusInput from './components/FocusInput';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import UserForm from './hooks/UserForm';

function App() {
  return (
    <div className="App">
   {/* <CounterOne/> */}
   {/* <CounterTwo/> */}
   {/* <ParentComponent/> */}
   {/* <CounterM/> */}
   {/* <FocusInput/> */}
   {/* <DocTitleOne/>
   <DocTitleTwo/> */}
   <UserForm/>
    </div>
  );
}

export default App;
