import React from 'react';
import ServiceCard from '../components/ServiceCard';
import '../styles/Services.css';
import { Link } from 'react-router-dom';
import { FaRegStar, FaRegHeart, FaMagic,FaLeanpub,FaUsers,FaChalkboardTeacher} from 'react-icons/fa';
import { IconBase } from 'react-icons';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaRegStar />,
      title: "Bridal Makeup",
      description: "Look flawless on your special day with our professional bridal makeup services tailored to your style and theme.",
      price: "Start from Rp.1.500.000",
      image: "/images/portfolio1.jpg"
    },
    {
      id: 2,
      icon: <FaRegHeart />,
      title: "Special Event Makeup",
      description: "Perfect for galas, parties, proms, and any special occasion where you want to look your absolute best.",
      price: "Start from Rp.500.000",
      image: "/images/portfolio2.jpg"
    },
    {
      id: 3,
      icon: <FaMagic />,
      title: "Photoshoot Makeup",
      description: "Creative and distinctive makeup looks designed specifically for photoshoots and fashion shows.",
      price: "Start from Rp.500.000",
      image: "/images/portfolio3.jpg"
    },
    {
      id: 4,
      icon: <FaLeanpub />,
      title: "Makeup Lessons",
      description: "Learn professional techniques and create your own signature look with personalized one-on-one makeup lessons.",
      price: "Rp.1.500.000 per six hour",
      image: "/images/portfolio4.jpg"
    },
    // {
    //   id: 5,
    //   icon: <FaUsers />,
    //   title: "Group Makeup Sessions",
    //   description: "Perfect for bridal parties, special events, or friends wanting to get ready together for a special occasion.",
    //   price: "Starting from $100 per person",
    //   image: "/images/portfolio5.jpg"
    // },
    {
      id: 5,
      icon: <FaChalkboardTeacher />,
      title: "Basic to Advance Makeup Course",
      description: "Get professional advice on the best products and techniques for your skin type and desired look.",
      price: "Rp.2.000.000 for 2 days course",
      image: "/images/portfolio6.jpg"
    }
  ];

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>My Services</h1>
        <p>Professional makeup services tailored to your unique style and occasion</p>
      </div>
      
      <div className="services-grid">
        {services.map(service => (
          <ServiceCard 
            icon={service.icon}
            key={service.id}
            title={service.title}
            description={service.description}
            price={service.price}
            image={service.image}
          />
        ))}
      </div>
      
      <div className="booking-info">
        <h2>Ready to Book?</h2>
        <p>Contact me for availability and to schedule your appointment</p>
        <Link to="/contact">
        <button className="booking-button">Book Now</button>
         </Link>
      </div>
    </div>
  );
};

export default Services;