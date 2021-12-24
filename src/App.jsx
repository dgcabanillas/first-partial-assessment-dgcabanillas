import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/detalle/:id" element={<Product />} />
            <Route exact path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
