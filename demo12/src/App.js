import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import About from './About'
import Navbar from './Navbar';
import Example from './Example';

function App() {
  return (
    <>
    <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/about" element={<About></About>}></Route>
       <Route path="/screen3" element={<Example></Example>}></Route>
     </Routes>
    </>
  );
}

export default App;
