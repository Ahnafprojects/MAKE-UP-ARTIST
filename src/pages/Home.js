import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegStar, FaRegHeart, FaMagic } from 'react-icons/fa';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';
import '../styles/Home.css';

const Home = () => {
  // Featured services
  const featuredServices = [
    {
      id: 1,
      icon: <FaRegStar />,
      title: 'Bridal Makeup',
      description: 'Look stunning on your special day with a customized makeup look that enhances your natural beauty.',
      price: 'Start from Rp.1.500.000'
    },
    {
        id: 2,
            icon: <FaRegHeart />,
            title: "Special Event Makeup",
            description: "Perfect for galas, parties, proms, and any special occasion where you want to look your absolute best.",
            price: "Start from Rp.500.000",
    },
    {
       id: 3,
            icon: <FaMagic />,
            title: "Photoshoot Makeup",
            description: "Creative and distinctive makeup looks designed specifically for photoshoots and fashion shows.",
            price: "Start from Rp.500.000",

    }
  ];

  // Featured portfolio items
  const featuredPortfolio = [
    {
      id: 1,
      image: '/images/portfolio1.jpg',
      category: 'Bridal',
      title: 'Wedding Makeup'
    },
    {
      id: 2,
      image: '/images/portfolio2.jpg',
      category: 'Photoshoot',
      title: 'Engagement'
    },
    {
      id: 3,
      image: '/images/portfolio3.jpg',
      category: 'Special Occasion',
      title: 'Birthday Makeup'
    }
  ];

  return (
    <>
      <HeroSection />
      
      {/* About Section */}
      <section className="section home-about">
        <div className="container">
          <div className="home-about-content">
            <div className="home-about-text">
              <h2>Welcome to Beauty by Nazla Ahmad</h2>
              <p>
                I'm Nazla Ahmad, a professional makeup artist with over 4 years of experience creating beautiful looks 
                for weddings, special events, photo shoots, and more.
              </p>
              <p>
                My passion lies in enhancing your natural beauty while ensuring you look and feel confident. 
                I believe makeup should be a form of self-expression that makes you feel like the best version of yourself.
              </p>
              <Link to="/about" className="btn">Learn More About Me</Link>
            </div>
            <div className="home-about-image">
              <img src="/images/about-image.jpg" alt="Ava - Professional Makeup Artist" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section home-services">
        <div className="container">
          <div className="section-title">
            <h2>My Services</h2>
            <p>Professional makeup services for every occasion</p>
          </div>
          
          <div className="services-grid">
            {featuredServices.map(service => (
              <ServiceCard 
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                price={service.price}
              />
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link to="/services" className="btn">View All Services</Link>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="section home-portfolio">
        <div className="container">
          <div className="section-title">
            <h2>My Gallery</h2>
            <p>A showcase of my recent makeup work</p>
          </div>
          
          <div className="portfolio-grid">
            {featuredPortfolio.map(item => (
              <PortfolioCard 
                key={item.id}
                image={item.image}
                category={item.category}
                title={item.title}
              />
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link to="/portfolio" className="btn">View Full Gallery</Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section home-testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Client Testimonials</h2>
            <p>What my clients say about my services</p>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>
                "OMG OMG SUKAK BANGET SAMA HASIL MAKEUP KAK NAZLA🥹💗
acara jam 06.00 sampe 15.00 masih aman buwangettt gaada yg namanya crack" masih mulus, jujurly ini aku keringetan parah tp aman aja.
nyampe rumah sekarang kekkk sayang bgt mau hapus makeup ini😖😭
"
              </p>
              <div className="testimonial-author">
                <h4>Zerlinda</h4>
                <p>Bridal Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section home-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Book Your Makeup Session?</h2>
            <p>Contact me today to discuss your makeup needs and book your appointment.</p>
            <Link to="/contact">
                   <button className="booking-button">Book Now</button>
                    </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;