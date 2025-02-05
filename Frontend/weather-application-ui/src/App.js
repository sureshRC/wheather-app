import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      
      </BrowserRouter>
      {/* <Home/> */}
    </div>
  );
}

export default App;
