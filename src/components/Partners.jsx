import React from 'react';
import hyperspace from '../assets/hyperspace.jpg';
import crop2cash from '../assets/crop2cash.svg';
import deimos from '../assets/deimos.svg';
import gmind from '../assets/gmind.png';
import octave from '../assets/octave.png';
import solab from '../assets/solab.svg';
import tombell from '../assets/tombell.jpg';
import '../component.css';


const p1Logos = [hyperspace, crop2cash, deimos, gmind];
const p2Logos = [octave, solab, tombell];

const SponsorsPartners = () => {
  return (
    <section className="partners" id='partners'>
      <h2>Partners</h2>
      <div className="logos">
        <div className="logos-grid">
          {p1Logos.map((logo, index) => (
            <img src={logo} alt={`Sponsor ${index + 1}`} key={index} />
          ))}
        </div>
        <div className="logos-grid">
          {p2Logos.map((logo, index) => (
            <img src={logo} alt={`Partner ${index + 1}`} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsPartners;
