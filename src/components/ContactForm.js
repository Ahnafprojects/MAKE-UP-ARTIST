import React, { useState, useEffect } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    location: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });
  
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });
    
    // Generate WhatsApp message and open WhatsApp
    const phoneNumber = '+6285708751887';
    const message = `Nama: ${formData.name}
No Telepon: ${formData.phone}
Layanan: ${formData.service}
Tanggal: ${formData.date}
Lokasi: ${formData.location}
Pesan: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Reset form after submission
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({
        name: '',
        phone: '',
        service: '',
        date: '',
        location: '',
        message: '',
      });
    }, 1000);
  };

  // Variables for responsiveness
  const isMobile = windowWidth <= 768;

  // Updated responsive styles
  const styles = {
    contactFormContainer: {
      backgroundColor: '#f9f9f9',
      padding: isMobile ? '1.5rem' : '3rem',
      borderRadius: '10px',
      boxShadow: '0 5px 30px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '0 auto',
      width: '100%'
    },
    contactForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    formRow: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '1.5rem' : '1.5rem',
      width: '100%'
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      flex: isMobile ? 'none' : '1',
      width: '100%'
    },
    label: {
      fontWeight: 500,
      color: '#333',
      fontSize: '0.9rem'
    },
    input: {
      padding: '0.8rem 1rem',
      border: '1px solid #ddd',
      borderRadius: '5px',
      fontFamily: '"Poppins", sans-serif',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      resize: 'none',
      width: '100%',
      boxSizing: 'border-box'
    },
    submitBtn: {
      padding: '1rem',
      fontSize: '1rem',
      fontWeight: 600,
      marginTop: '1rem',
      backgroundColor: '#f8a4c1',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      width: '100%',
      transition: 'all 0.3s ease'
    },
    disabledBtn: {
      backgroundColor: '#ccc',
      cursor: 'not-allowed',
      transform: 'none'
    },
    formSuccess: {
      textAlign: 'center',
      padding: isMobile ? '1.5rem' : '2rem'
    },
    successHeading: {
      color: '#f8a4c1',
      fontSize: isMobile ? '1.75rem' : '2rem',
      marginBottom: '1rem'
    },
    successText: {
      marginBottom: '2rem',
      fontSize: isMobile ? '1rem' : '1.1rem'
    }
  };

  return (
    <div style={styles.contactFormContainer} className="contact-form-container">
      {formStatus.submitted ? (
        <div style={styles.formSuccess} className="form-success">
          <h3 style={styles.successHeading}>Thank You!</h3>
          <p style={styles.successText}>Your message has been sent via WhatsApp.</p>
          <button 
            style={styles.submitBtn}
            className="btn"
            onClick={() => setFormStatus({ submitted: false, submitting: false, error: false })}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={styles.contactForm} className="contact-form">
          <div style={styles.formGroup} className="form-group">
            <label style={styles.label} htmlFor="name">Full Name</label>
            <input
              style={styles.input}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div style={styles.formRow} className="form-row">
            <div style={styles.formGroup} className="form-group">
              <label style={styles.label} htmlFor="phone">Phone</label>
              <input
                style={styles.input}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div style={styles.formGroup} className="form-group">
              <label style={styles.label} htmlFor="date">Preferred Date</label>
              <input
                style={styles.input}
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div style={styles.formGroup} className="form-group">
            <label style={styles.label} htmlFor="service">Service Interested In</label>
            <select
              style={styles.input}
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a service</option>
              <option value="bridal">Bridal Makeup</option>
              <option value="special-occasion">Special Event Makeup</option>
              <option value="editorial">Photoshoot Makeup</option>
              <option value="makeup-lesson">Makeup Lesson</option>
              <option value="consultation">Basic to Advance Makeup Course</option>
            </select>
          </div>
          
          <div style={styles.formGroup} className="form-group">
            <label style={styles.label} htmlFor="location">Location</label>
            <input
              style={styles.input}
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter the location where you'd like the makeup service"
              required
            />
          </div>
          
          <div style={styles.formGroup} className="form-group">
            <label style={styles.label} htmlFor="message">Your Message</label>
            <textarea
              style={styles.input}
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            style={formStatus.submitting ? {...styles.submitBtn, ...styles.disabledBtn} : styles.submitBtn}
            className="btn submit-btn"
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}