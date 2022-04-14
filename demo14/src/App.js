import logo from './logo.svg';
import './App.css';
import CounterContainer from './CounterContainer';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CounterContainer></CounterContainer>
      
    </div>
    </Provider>
  );
}

export default App;
