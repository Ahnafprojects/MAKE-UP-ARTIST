import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';
import { FaInstagram, FaFacebook, FaTiktok, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleFormSubmit = (formData) => {
    console.log('Form data submitted:', formData);
    // Here you would typically send the data to a server
    setFormSubmitted(true);
    // Reset form submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-container">
      {/* Header Section */}
      <div className="contact-header">
        <h3>Get In Touch</h3>
        <p>I'd love to hear from you! Whether you have questions about my services or want to book an appointment, please fill out the form below and I'll get back to you soon.</p>
      </div>
      
      {/* Quick Contact Cards - Mobile First */}
      <div className="quick-contact-cards">
        <div className="quick-contact-card">
          <div className="contact-icon">
            <FaPhone />
          </div>
          <div className="contact-details">
            <h4>Call Me</h4>
            <p>+62 857-0875-1887</p>
             <span className="service-area">Call Now</span>
          </div>
        </div>
        
        <div className="quick-contact-card">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>
          <div className="contact-details">
            <h4>Location</h4>
            <p>Sidoarjo, Indonesia</p>
            <span className="service-area">Surabaya, Sidoarjo, Pasuruan, Malang</span>
          </div>
        </div>
        
        <div className="quick-contact-card">
          <div className="contact-icon">
            <FaClock />
          </div>
          <div className="contact-details">
            <h4>Business Hours</h4>
            <p>Open Everyday</p>
            <span className="appointment-note">By appointment only</span>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-section">
        <h3>Follow Me on Social Media</h3>
        <div className="social-grid">
          <a href="https://www.instagram.com/nazlaahmad?igsh=MWZ6ZjVwdWxyeW1ocg%3D%3D&utm_source=qr" 
             target="_blank" 
             rel="noreferrer" 
             className="social-card instagram">
            <FaInstagram />
            <span>Instagram</span>
            <small>@nazlaahmad</small>
          </a>
          
          <a href="https://www.facebook.com/share/15RyVJUQ1M/?mibextid=wwXIfr" 
             target="_blank" 
             rel="noreferrer" 
             className="social-card facebook">
            <FaFacebook />
            <span>Facebook</span>
            <small>Nazla Ahmad</small>
          </a>
          
          <a href="https://www.tiktok.com/@makeupbynazla?_t=ZS-8wazmKPcN5M&_r=1" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="social-card tiktok">
            <FaTiktok />
            <span>TikTok</span>
            <small>@makeupbynazla</small>
          </a>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="contact-form-section">
        <div className="form-header">
          <h2>Send Me a Message</h2>
          <p>Fill out the form below and I'll get back to you soon!</p>
        </div>
        
        <div className="contact-form-container">
          {formSubmitted ? (
            <div className="form-success-message">
              <div className="success-icon">✓</div>
              <h3>Thank you for your message!</h3>
              <p>I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <ContactForm onSubmit={handleFormSubmit} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;