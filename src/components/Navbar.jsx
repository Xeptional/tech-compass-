import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import '../component.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar flex ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container flex">
        <img className='logo' src={logo} alt="TechCompass" />
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`nav-links ${isOpen ? 'mobile-nav' : ''}`}>
          {/* <li>
            <Link to="hero" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
          </li> */}
          <li>
            <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link>
          </li>
          <li>
            <Link to="speakers" smooth={true} duration={500} onClick={toggleMenu}>Speakers</Link>
          </li>
          <li>
            <Link to="schedule" smooth={true} duration={500} onClick={toggleMenu}>Schedule</Link>
          </li>
          <li>
            <Link to="sponsors-partners" smooth={true} duration={500} onClick={toggleMenu}>Sponsors & Partners</Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
