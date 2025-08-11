
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer';

// import DocTitle from './components/DocTitle';
// import DocTitleTwo from './components/DocTitleTwo';
//import CounterUseMemo from './components/CounterUseMemo';
//import FocusInput from './components/FocusInput';
//import DataFetchingOne from './components/DataFetchingOne';
//import DataFetchingTwo from './components/DataFetchingTwo';
//import CounterOne from './components/CounterOne';
//import CounterTwo from './components/CounterTwo';
//import Greet from './components/Greet';
//import FunctionClick from './components/FunctionClick';
//import NameList from './components/NameList';
//import Stylesheet from './components/Stylesheet';
//import Inline from './components/inline';


function App() {
  return (
    // <div className="App">
    //   {/* <Inline/> */}
    //   {/* <Stylesheet primary={true} /> */}

    //    {/* <Greet name="John" age={30} >
    //       <p>This is a child</p>
    //    </Greet>
    //    <Greet name="Jane" age={25} >
    //     <button>Action</button>
    //    </Greet>
    //    <Greet name="Alex" age={22} /> */}

    //    {/* <FunctionClick/> */}
    //    {/* <NameList/> */}
    //    {/* <CounterOne/> */}
    //    {/* <CounterTwo/> */}
    //    {/* <DataFetchingOne/> */}
    //    {/* <DataFetchingTwo/> */}
    //    {/* <CounterUseMemo/> */}
    //    {/* <FocusInput/> */}
    //    {/* <DocTitle/>
    //   <DocTitleTwo/> */}

       
    // </div>

    <Provider store={store}>
      <div className='App'>
        <CakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
