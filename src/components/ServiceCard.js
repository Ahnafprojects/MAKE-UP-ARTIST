import React from 'react';
import '../styles/ServiceCard.css';

const ServiceCard = ({ icon, title, description, price }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {price && <div className="service-price">{price}</div>}
    </div>
  );
};

export default ServiceCard;