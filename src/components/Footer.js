import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTiktok} from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Beauty by Nazla Ahmad</h3>
            <p>Your beauty is my passion</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Gallery</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Bridal Makeup</Link></li>
              <li><Link to="/services">Special Event Makeup</Link></li>
              <li><Link to="/services">Photoshoot Makeup</Link></li>
              <li><Link to="/services">Makeup Lessons</Link></li>
              <li><Link to="/services">Basic to Advance Makeup Course</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Info</h4>
            <p>Phone: +62 857-0875-1887</p>
            <p>Sidoarjo, Indonesia</p>
            
            <div className="social-icons">
              <a href="https://www.instagram.com/nazlaahmad?igsh=MWZ6ZjVwdWxyeW1ocg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/share/15RyVJUQ1M/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
               <a href="https://www.tiktok.com/@makeupbynazla?_t=ZS-8wazmKPcN5M&_r=1" target="_blank" rel="noopener noreferrer"
               ><FaTiktok />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Beauty by Nazla Ahmad . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;