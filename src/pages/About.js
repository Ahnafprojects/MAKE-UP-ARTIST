import React from 'react';
import '../styles/About.css';
import {FaBroom, FaHeart, FaKissWinkHeart} from 'react-icons/fa';

const About = () => {
  // Testimonial data - Updated to use local images
  const testimonials = [
    {
      id: 1,
      content: "kak nazla mau kasi testi sorry ya baru sempet😭🙏🏻, makeupnya bagus bgt nempel bgt di muka aku dari pagi sampe malem ngecracknya minim di kulit aku yg minyakan ini, makeup mbakku juga bagus dia suka bgt malah di dia ga crack samsek cuma dibagian idung dikit doang pokonya luv bgt deh meskipun aku bawel bgt tp tetep sabar ngabulin permintaanku hihi thank u yah kak🫰🏻🫰🏻.",
      author: "Client",
      role: "Bride",
      avatar: "/images/client1.jpg" // Ganti dengan nama file foto client Anda
    },
    {
      id: 2,
      content: `OMG OMG SUKAK BANGET SAMA HASIL MAKEUP KAK NAZLA🥹💗
      acara jam 06 pagisampe 3 sore masih aman buwangettt gaada yg namanya crack masih mulus jujurly ini aku keringetan parah tp aman aja.
nyampe rumah sekarang kekkk sayang bgt mau hapus makeup ini😖😭.`,
      author: "Client",
      role: "Engagement",
      avatar: "/images/client2.jpg" // Ganti dengan nama file foto client Anda
    },
    {
      id: 3,
      content: "Mbaaaa mau ngasih testimoni pisaaan wkwk meskipun telat y🫣 aku di make up smean jam stgh 3 pagi, acaranya di mlg dan outdoor, daaaaan ini fotonya di ambil jam stgh 4 soreee😍 masih fresh dan minim crack 🥵 masy allaaahhh sekaliiii.",
      author: "Client",
      role: "Bride",
      avatar: "/images/client3.jpg" // Ganti dengan nama file foto client Anda
    }
  ];

  // Stats data
  const stats = [
    {
      number: "4+",
      label: "Years Experience"
    },
    {
      number: "250+",
      label: "Happy Clients"
    },
    // {
    //   number: "120+",
    //   label: "Successful Events"
    // }
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>About Me</h1>
          <p>Learn more about my journey and passion for makeup artistry</p>
        </div>
      </div>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="about-section">
            <div className="about-image">
              <img src="/images/about-image.jpg" alt="Professional Makeup Artist" />
            </div>
            <div className="about-content">
              <h2>My Passion for Beauty</h2>
              <p>
                Welcome to my world of beauty and artistry! I'm Nazla Ahmad, a professional makeup artist with over 4 years of experience transforming faces and boosting confidence through the power of makeup.
              </p>
              <p>
                My journey began with a deep fascination for colors and textures, which eventually led me to pursue formal training at the prestigious Makeup Academy in New York. Since then, I've worked with countless clients for weddings, special events, photoshoot.
              </p>
              <p>
                I believe that makeup is not just about enhancing external beauty, but also about making people feel their absolute best. My approach is client-centered, focusing on highlighting your unique features while ensuring you still look and feel like yourself—just an elevated version.
              </p>
              <div className="about-stats">
                {stats.map((stat, index) => (
                  <div className="stat-item" key={index}>
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="about-signature">Nazla Ahmad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section">
        <div className="container">
          <div className="philosophy-section">
            <h2 className="section-title">My Philosophy</h2>
            <div className="philosophy-content">
              <div className="philosophy-item">
                <div className="service-icon">
                <FaHeart /> 
                {/* <i className="fas fa-heart"></i> */}
                </div>
                <h3>Beauty for Everyone</h3>
                <p>I believe that makeup should be inclusive and accessible to everyone, regardless of age, skin type, or background.</p>
              </div>
              <div className="philosophy-item">
                 <div className="service-icon">
                  <FaBroom />
                </div>
                <h3>Clean Products</h3>
                <p>I prioritize using high-quality, cruelty-free products that are gentle on the skin and kind to our planet.</p>
              </div>
              <div className="philosophy-item">
                <div className="service-icon">
                  <FaKissWinkHeart   />
                </div>
                <h3>Enhance, Not Mask</h3>
                <p>My goal is to enhance your natural beauty rather than masking it, creating looks that make you feel confident and authentic.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section">
        <div className="container">
          <div className="certifications-section">
            <h2 className="section-title">Training & Certifications</h2>
            <div className="certifications-content">
              <div className="certification-item">
                <div className="certification-year">2021 </div>
                <div className="certification-details">
                  <h3>pelatihan rias pengantin</h3>
                  <p>Dinas Tenaga Kerja Kota Pasuruan </p>
                </div>
              </div>
              <div className="certification-item">
                <div className="certification-year">2023</div>
                <div className="certification-details">
                  <h3> Sertifikasi Komptensi Tata Rias Pengantin </h3>
                  <p>Badan Nasional Sertifikasi Profesi (BNSP)</p>
                </div>
              </div>
              <div className="certification-item">
                <div className="certification-year">2024</div>
                <div className="certification-details">
                  <h3> Peningkatan kualitas jasa rias pengantin kota pasuruan</h3>
                  <p>Dinas Koperasi dan Usaha Mikro Kota Pasuruan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonials-heading">
            <h2>What My Clients Say</h2>
            <p>Real experiences from people I've had the pleasure of working with</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="testimonial-content">"{testimonial.content}"</div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      onError={(e) => {
                        // Fallback jika gambar tidak ditemukan
                        e.target.src = 'https://via.placeholder.com/60x60/cccccc/666666?text=Client';
                      }}
                    />
                  </div>
                  <div className="testimonial-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;