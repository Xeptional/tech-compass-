import React from 'react';
import '../component.css';

const About = () => {
  return (
    <section className="about" id='about'>
      <h2>About</h2>
      <p>
        <span className='bold'>Tech<span className='name'>Compass</span> Unveils</span> is an exciting opportunity that will connect over 200 
        talented Computer Science undergraduates from the University of Ibadan with 
        leading tech companies, offering a platform for career growth, internship 
        opportunities, and industry engagement. 
      </p>  
      <p>
        Whether you're an aspiring software engineer, product designer, machine learning 
        expert, security analyst, or data scientist, this event is designed to empower you 
        to explore real-world challenges, showcase your skills, and network with top companies. 
      </p>
      <p>  
        For sponsors and partners, it’s a chance to engage with the next generation of tech 
        talent, present your innovative work, and inspire creativity and critical thinking
         in future professionals, all while positioning your organization as a leader in the tech industry.
      </p>
    </section>
  );
};

export default About;
