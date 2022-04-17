import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Booking from './Components/Booking/Booking';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Header />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking/:serviceId" element={<Booking />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
