import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
