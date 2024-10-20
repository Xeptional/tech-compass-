import React from 'react';
import '../component.css';

const sponsorsLogos = ['src\\assets\\sponsor.png', 'src\\assets\\sponsor.png', 'src\\assets\\sponsor.png', 'src\\assets\\sponsor.png'];
const partnersLogos = ['src\\assets\\sponsor.png', 'src\\assets\\sponsor.png', 'src\\assets\\sponsor.png', 'src\\assets\\sponsor.png'];

const SponsorsPartners = () => {
  return (
    <section className="sponsors-partners" id='sponsors-partners'>
      <h2>Sponsors & Partners</h2>
      <div className="logos">
        <div className="logos-grid">
          {sponsorsLogos.map((logo, index) => (
            <img src={logo} alt={`Sponsor ${index + 1}`} key={index} />
          ))}
        </div>
        <div className="logos-grid">
          {partnersLogos.map((logo, index) => (
            <img src={logo} alt={`Partner ${index + 1}`} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsPartners;
