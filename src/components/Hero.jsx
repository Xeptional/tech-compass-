import React from 'react';
import '../component.css';

const Hero = () => {
  return (
    <section className="hero flex-center" id="hero">
      <div className="hero-content">
        <h1>Tech<span className='name'>Compass</span> Unveils</h1>
        <div className="details">
          <p>2nd November</p>
          <p>10:00 AM</p>
          <p>KAAF Auditorium</p>
        </div>
        <button className="register-button">Register Now</button>
      </div>
    </section>
  );
};

export default Hero;
