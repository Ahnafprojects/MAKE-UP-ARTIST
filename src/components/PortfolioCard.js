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
// import React from 'react';
// import '../styles/Portfolio.css';

// const PortfolioCard = ({ image, category, title }) => {
//   return (
//     <div className="portfolio-card">
//       <img src={image} alt={title} />
//       <div className="portfolio-card-content">
//         <span className="portfolio-card-category">{category}</span>
//         <h3 className="portfolio-card-title">{title}</h3>
//       </div>
//     </div>
//   );
// };
import React from 'react';
import '../styles/PortfolioCard.css';

const PortfolioCard = ({ image, category, title, onCategoryClick }) => {
  
  const handleCategoryClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onCategoryClick) {
      onCategoryClick(category);
    }
  };

  // Generate CSS class based on category
  const getCategoryClass = (category) => {
    return `category-${category.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <div className="portfolio-card">
      <div className="portfolio-image">
        <img src={image} alt={title} />
        <div className="portfolio-overlay">
          <div className="portfolio-content">
            <span 
              className={`portfolio-category clickable-category ${getCategoryClass(category)}`}
              onClick={handleCategoryClick}
              title={`Click to filter by ${category}`}
            >
              {category}
            </span>
            <h3 className="portfolio-title">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;