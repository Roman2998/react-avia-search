import './App.css';
import Body from "./Body/Body";
import {Provider} from "react-redux";
import store from "./Redux/redux-store";

function App() {
  return (
    <div className="App">
      <Body />
    </div>
  );
}

const AppContainer = () => {
    return <Provider store={store}>
        <App />
    </Provider>
}

export default AppContainer;
