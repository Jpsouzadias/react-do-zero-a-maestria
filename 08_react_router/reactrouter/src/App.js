import './App.css';

// 1 - config react router
import{BrowserRouter, Routes, Route} from 'react-router-dom'

// components
import Navbar from "./components/Navbar";

// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from "./pages/Info";
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2 - links com react router */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 6 - nested route */}
          <Route path="/product/:id/info" element={<Info />} ></Route>
          {/* 4 - rota dinamica */}
          <Route path="/product/:id" element={<Product />} ></Route>
          {/* no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
