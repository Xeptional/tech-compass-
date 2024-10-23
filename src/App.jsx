import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
