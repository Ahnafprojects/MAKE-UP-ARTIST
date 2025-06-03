import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="overlay"></div>
      <div className="container hero-content">
        <h1>Enhance Your Natural Beauty</h1>
        <p>Professional Makeup Artist for Every Occasion</p>
        <div className="hero-buttons">
          <Link to="/portfolio" className="btn">View Gallery</Link>
          <Link to="/contact" className="btn btn-outline">Book Now</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;