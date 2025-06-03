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

  // Enhanced responsiveness variables
  const isMobile = windowWidth <= 768;
  const isSmallMobile = windowWidth <= 480;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;

  // Enhanced responsive styles
  const styles = {
    contactFormContainer: {
      backgroundColor: '#f9f9f9',
      padding: isSmallMobile ? '1rem' : isMobile ? '1.5rem' : isTablet ? '2rem' : '3rem',
      borderRadius: isSmallMobile ? '8px' : '10px',
      boxShadow: '0 5px 30px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: isSmallMobile ? '0 0.5rem' : isMobile ? '0 1rem' : '0 auto',
      width: '100%',
      minHeight: 'auto',
      boxSizing: 'border-box'
    },
    contactForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '1.25rem' : '1.5rem'
    },
    formRow: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '1.25rem' : '1.5rem',
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
      fontSize: isSmallMobile ? '0.85rem' : '0.9rem',
      marginBottom: '0.25rem'
    },
    input: {
      padding: isSmallMobile ? '0.75rem 0.875rem' : '0.8rem 1rem',
      border: '1px solid #ddd',
      borderRadius: isSmallMobile ? '4px' : '5px',
      fontFamily: '"Poppins", sans-serif',
      fontSize: isSmallMobile ? '16px' : '1rem', // 16px prevents zoom on iOS
      transition: 'border-color 0.3s ease',
      resize: 'none',
      width: '100%',
      boxSizing: 'border-box',
      outline: 'none',
      WebkitAppearance: 'none', // Remove iOS styling
      MozAppearance: 'none', // Remove Firefox styling
      appearance: 'none'
    },
    inputFocus: {
      borderColor: '#f8a4c1',
      boxShadow: '0 0 0 2px rgba(248, 164, 193, 0.2)'
    },
    select: {
      padding: isSmallMobile ? '0.75rem 0.875rem' : '0.8rem 1rem',
      border: '1px solid #ddd',
      borderRadius: isSmallMobile ? '4px' : '5px',
      fontFamily: '"Poppins", sans-serif',
      fontSize: isSmallMobile ? '16px' : '1rem',
      transition: 'border-color 0.3s ease',
      width: '100%',
      boxSizing: 'border-box',
      outline: 'none',
      backgroundColor: 'white',
      cursor: 'pointer',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      appearance: 'none',
      backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 0.75rem center',
      backgroundSize: '1rem',
      paddingRight: '2.5rem'
    },
    textarea: {
      padding: isSmallMobile ? '0.75rem 0.875rem' : '0.8rem 1rem',
      border: '1px solid #ddd',
      borderRadius: isSmallMobile ? '4px' : '5px',
      fontFamily: '"Poppins", sans-serif',
      fontSize: isSmallMobile ? '16px' : '1rem',
      transition: 'border-color 0.3s ease',
      resize: 'vertical',
      width: '100%',
      boxSizing: 'border-box',
      outline: 'none',
      minHeight: isSmallMobile ? '80px' : '100px',
      maxHeight: '200px'
    },
    submitBtn: {
      padding: isSmallMobile ? '0.875rem 1rem' : '1rem',
      fontSize: isSmallMobile ? '0.95rem' : '1rem',
      fontWeight: 600,
      marginTop: isMobile ? '0.5rem' : '1rem',
      backgroundColor: '#f8a4c1',
      color: 'white',
      border: 'none',
      borderRadius: isSmallMobile ? '4px' : '5px',
      cursor: 'pointer',
      width: '100%',
      transition: 'all 0.3s ease',
      touchAction: 'manipulation', // Improves touch response
      WebkitTapHighlightColor: 'transparent' // Removes tap highlight on iOS
    },
    submitBtnHover: {
      backgroundColor: '#f691a8',
      transform: 'translateY(-1px)'
    },
    disabledBtn: {
      backgroundColor: '#ccc',
      cursor: 'not-allowed',
      transform: 'none'
    },
    formSuccess: {
      textAlign: 'center',
      padding: isSmallMobile ? '1.5rem 1rem' : isMobile ? '1.5rem' : '2rem'
    },
    successHeading: {
      color: '#f8a4c1',
      fontSize: isSmallMobile ? '1.5rem' : isMobile ? '1.75rem' : '2rem',
      marginBottom: '1rem',
      fontWeight: 600
    },
    successText: {
      marginBottom: '2rem',
      fontSize: isSmallMobile ? '0.9rem' : isMobile ? '1rem' : '1.1rem',
      color: '#666',
      lineHeight: '1.5'
    }
  };

  const [focusedField, setFocusedField] = useState(null);

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const getInputStyle = (fieldName, isTextarea = false, isSelect = false) => {
    const baseStyle = isSelect ? styles.select : isTextarea ? styles.textarea : styles.input;
    const focusStyle = focusedField === fieldName ? styles.inputFocus : {};
    return { ...baseStyle, ...focusStyle };
  };

  return (
    <div style={styles.contactFormContainer}>
      {formStatus.submitted ? (
        <div style={styles.formSuccess}>
          <h3 style={styles.successHeading}>Terima Kasih!</h3>
          <p style={styles.successText}>Pesan Anda telah dikirim melalui WhatsApp.</p>
          <button 
            style={styles.submitBtn}
            onClick={() => setFormStatus({ submitted: false, submitting: false, error: false })}
            onMouseEnter={(e) => {
              if (!isMobile) {
                Object.assign(e.target.style, styles.submitBtnHover);
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile) {
                Object.assign(e.target.style, styles.submitBtn);
              }
            }}
          >
            Kirim Pesan Lain
          </button>
        </div>
      ) : (
        <div style={styles.contactForm}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="name">Nama Lengkap *</label>
            <input
              style={getInputStyle('name')}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
              placeholder="Masukkan nama lengkap Anda"
              required
            />
          </div>
          
          <div style={styles.formRow}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="phone">No. Telepon *</label>
              <input
                style={getInputStyle('phone')}
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={handleBlur}
                placeholder="08xxxxxxxxxx"
                required
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="date">Tanggal Diinginkan *</label>
              <input
                style={getInputStyle('date')}
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                onFocus={() => handleFocus('date')}
                onBlur={handleBlur}
                required
              />
            </div>
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="service">Layanan yang Diminati *</label>
            <select
              style={getInputStyle('service', false, true)}
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              onFocus={() => handleFocus('service')}
              onBlur={handleBlur}
              required
            >
              <option value="" disabled>Pilih layanan</option>
              <option value="bridal">Makeup Pengantin</option>
              <option value="special-occasion">Makeup Acara Khusus</option>
              <option value="editorial">Makeup Photoshoot</option>
              <option value="makeup-lesson">Les Makeup</option>
              <option value="consultation">Kursus Makeup Basic to Advance</option>
            </select>
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="location">Lokasi *</label>
            <input
              style={getInputStyle('location')}
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              onFocus={() => handleFocus('location')}
              onBlur={handleBlur}
              placeholder="Masukkan lokasi dimana Anda ingin layanan makeup"
              required
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="message">Pesan Anda *</label>
            <textarea
              style={getInputStyle('message', true)}
              id="message"
              name="message"
              rows={isSmallMobile ? "4" : "5"}
              value={formData.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
              placeholder="Ceritakan lebih detail tentang kebutuhan Anda..."
              required
            />
          </div>
          
          <button 
            type="submit" 
            style={formStatus.submitting ? {...styles.submitBtn, ...styles.disabledBtn} : styles.submitBtn}
            disabled={formStatus.submitting}
            onClick={handleSubmit}
            onMouseEnter={(e) => {
              if (!isMobile && !formStatus.submitting) {
                Object.assign(e.target.style, {...styles.submitBtn, ...styles.submitBtnHover});
              }
            }}
            onMouseLeave={(e) => {
              if (!isMobile && !formStatus.submitting) {
                Object.assign(e.target.style, styles.submitBtn);
              }
            }}
          >
            {formStatus.submitting ? 'Mengirim...' : 'Kirim Pesan'}
          </button>
        </div>
      )}
    </div>
  );
}