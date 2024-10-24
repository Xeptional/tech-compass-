import React from 'react';
import s1 from '../assets/Oluwatosin.jpg';
import s2 from '../assets/olorunfemi.jpeg';
import '../component.css';

const Speakers = () => {
  const speakersData = [
    {
      name: 'Olorunfemi Oluwaniran',
      bio: 'Chief Technical Officer - AWA Bike',
      twitter: 'https://twitter.com/johndoe',
      image: s2
    },
    {
      name: 'Oluwatosin Adesua',
      bio: 'Senior System Engineer - Interswitch Group',
      twitter: 'https://twitter.com/johndoe',
      image: s1
    }
  ];

  return (
    <section className="speakers" id="speakers">
      <div className="container">
        <h2>Speakers</h2>
        <div className="speakers-grid">
          {speakersData.map((speaker, index) => (
            <div key={index} className="speaker-card">
              <img src={speaker.image} alt={speaker.name} className="speaker-image" />
              <h3>{speaker.name}</h3>
              <p className="speaker-bio">{speaker.bio}</p>
              <a href={speaker.twitter} className="twitter-link" target="_blank" rel="noopener noreferrer">
                Follow on Twitter
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
