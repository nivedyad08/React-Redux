import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CounterContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import CheckBox from "./components/CheckBox";
// import ShallowCopying from "./components/ShallowCopying/";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <CheckBox/>
        {/* <ShallowCopying/> */}
      </div>
     </Provider>
  );
}

export default App;
