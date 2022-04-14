import logo from './logo.svg';
import './App.css';
import Child from './Child';
import Parent from './Parent';
import CalculatorParent from './CalculatorParent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CalculatorParent></CalculatorParent>
      </header>
    </div>
  );
}

export default App;
