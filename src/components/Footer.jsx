import React from 'react';
import '../component.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} TechCompass Career Fair. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
