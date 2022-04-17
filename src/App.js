import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import Booking from './Components/Booking/Booking';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking/:serviceId" element={<Booking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
