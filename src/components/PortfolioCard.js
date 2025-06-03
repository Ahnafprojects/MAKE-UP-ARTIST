// import React from 'react';
// import '../styles/PortfolioCard.css';

// const PortfolioCard = ({ image, category, title }) => {
//   return (
//     <div className="portfolio-card">
//       <div className="portfolio-img">
//         <img src={image} alt={title} />
//       </div>
//       <div className="portfolio-info">
//         <span className="category">{category}</span>
//         <h3>{title}</h3>
//       </div>
//     </div>
//   );
// };

// export default PortfolioCard;
import React from 'react';
import '../styles/Portfolio.css';

const PortfolioCard = ({ image, category, title }) => {
  return (
    <div className="portfolio-card">
      <img src={image} alt={title} />
      <div className="portfolio-card-content">
        <span className="portfolio-card-category">{category}</span>
        <h3 className="portfolio-card-title">{title}</h3>
      </div>
    </div>
  );
};

export default PortfolioCard;