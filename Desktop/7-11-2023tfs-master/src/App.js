import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PastEvent from './components/PastEvent';
import OurEvents from './components/OurEvents';
import Services from './components/Services';
import Partners from './components/Partners'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Services/>
      <Partners />
      <div>
      <Routes>
        <Route path="/" element={<PastEvent />} />
        <Route path="/our-event" element={<OurEventsPage />} />
      </Routes>
      </div>
      <About/>
      <Footer/>

    </Router>
  );
}

const OurEventsPage = () => {
  return (
    <div>
      <OurEvents />
    </div>
  );
};

export default App;
