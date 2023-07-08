import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Slider from './pages/Slider';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import ContactForm from './pages/Contact';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import About from './pages/About';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Slider />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
