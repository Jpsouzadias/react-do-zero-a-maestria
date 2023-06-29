import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// pages
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
