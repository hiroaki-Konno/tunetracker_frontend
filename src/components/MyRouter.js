import React from 'react';
import BasePage from './BasePage';
import Home from './Home'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const MyRouter = () => (
    <Router>
    <Routes>
    <Route path="/home" element={<Home />} />
    {/* <Route path="/about" element={<About />} /> */}
    {/* <Route path="/contact" element={<Contact />} /> */}
  </Routes>
    </Router>
);

export default MyRouter;
