import React, { useState } from 'react';
import PortfolioCard from '../components/PortfolioCard';
import '../styles/Portfolio.css';

const Portfolio = () => {
  // Portfolio data
  const portfolioItems = [
    {
      id: 1,
      image: './images/portfolio1.jpg',
      category: 'Bridal',
      title: 'Wedding Makeup'
    },
    {
      id: 2,
      image: './images/portfolio2.jpg',
      category: 'Photoshoot',
      title: 'Engagement '
    },
    {
      id: 3,
      image: './images/portfolio3.jpg',
      category: 'Special Occasion',
      title: 'Birthday Makeup'
    },
    {
      id: 4,
      image: './images/portfolio4.jpg',
      category: 'Bridal',
      title: 'Natural Bridal Beauty'
    },
    {
      id: 5,
      image: './images/portfolio5.jpg',
      category: 'Photoshoot',
      title: 'Photoshoot Makeup'
    },
    {
      id: 6,
      image: './images/portfolio6.jpg',
      category: 'Special Occasion',
      title: 'Evening Event Makeup'
    }
  ];

  // Filter categories
  const categories = ['All', 'Bridal', 'Photoshoot', 'Special Occasion'];
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter portfolio items by category
  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="portfolio-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>My Gallery</h1>
          <p>A collection of my best makeup work for various occasions</p>
        </div>
      </div>
      
      {/* Portfolio Content */}
      <section className="section">
        <div className="container">
          {/* Portfolio Filters */}
          <div className="portfolio-filters">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="portfolio-grid">
            {filteredItems.map(item => (
              <PortfolioCard 
                key={item.id}
                image={item.image}
                category={item.category}
                title={item.title}
              />
            ))}
          </div>
          
          {/* Portfolio Note */}
          <div className="portfolio-note">
            <p>Looking for a specific style? Contact me to discuss your needs for your special occasion.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;