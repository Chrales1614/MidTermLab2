import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  // PnC Campus Facilities Gallery - Using local images
  const galleryItems = [
    {
      id: 1,
      title: "PnC Main Building",
      description: "The main administrative building of Pamantasan ng Cabuyao",
      image: "/images/pnc-main.png"
    },
    {
      id: 2,
      title: "PnC Library",
      description: "Modern library with extensive academic resources",
      image: "/images/pnc-library.png"
    },
    {
      id: 3,
      title: "Computer Laboratory",
      description: "State-of-the-art computer facilities for IT students",
      image: "/images/pnc-computer-lab.png"
    },
    {
      id: 6,
      title: "Cafeteria",
      description: "Campus dining facility for students and faculty",
      image: "/images/pnc-cafeteria.jpg"
    },
    {
      id: 7,
      title: "Sports Complex",
      description: "Multi-purpose sports facility for athletics",
      image: "/images/pnc-sports-complex.jpg"
    },
    {
      id: 8,
      title: "Auditorium",
      description: "Large auditorium for events and ceremonies",
      image: "/images/pnc-auditorium.jpg"
    }
  ];

  return (
    <div className="blog-post-page">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <article className="blog-post">

              {/* Post Header */}
              <header className="post-header">
                <div className="post-meta">
                  <span className="post-category">
                    <i className="fas fa-tag me-1"></i>
                    Campus
                  </span>
                  <span className="post-date">
                    <i className="fas fa-calendar me-1"></i>
                    December 12, 2024
                  </span>
                  <span className="post-read-time">
                    <i className="fas fa-clock me-1"></i>
                    3 min read
                  </span>
                </div>
                  <h1 className="post-title">Campus Facilities: Modern Learning Spaces at Pamantasan ng Cabuyao</h1>
                  <p className="post-subtitle">Explore our state-of-the-art facilities designed to provide students with the best possible learning environment for academic excellence and holistic development</p>
              </header>

              {/* Featured Image */}
              <div className="post-featured-image">
                <img src="/images/pnc-campus-overview.jpg" alt="Pamantasan ng Cabuyao Campus Overview" />
              </div>

              {/* Post Content */}
                <div className="post-content">
                  <p className="lead">
                    Pamantasan ng Cabuyao (PnC) is proud to offer modern, well-equipped facilities that support our mission of providing quality education. Our campus infrastructure reflects our commitment to creating an environment conducive to learning, research, and holistic student development.
                  </p>
                  <h2>World-Class Campus Facilities</h2>
                  <p>
                    Since our establishment in 2003, we have continuously invested in upgrading our facilities to meet international standards. Our campus features comprehensive learning spaces, advanced laboratories, modern technology infrastructure, and recreational facilities that support the academic and personal growth of every student - our "Dangal ng Bayan."
                  </p>

                <div className="gallery-grid">
                  {galleryItems.map((item) => (
                    <div key={item.id} className="gallery-item">
                      <div className="gallery-image">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          loading="lazy"
                        />
                        <div className="gallery-overlay">
                          <button className="btn btn-light btn-sm">
                            <i className="fas fa-search-plus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="gallery-content">
                        <h4 className="gallery-title">{item.title}</h4>
                        <p className="gallery-description">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                  <h2>PnC by the Numbers</h2>
                  <p>
                    Our commitment to excellence is reflected in our continuous growth and achievements since 2003. These numbers represent our dedication to quality education and student success.
                  </p>

                  <div className="stats-grid">
                    <div className="stat-card">
                      <div className="stat-icon">
                        <i className="fas fa-building"></i>
                      </div>
                      <div className="stat-content">
                        <h3>6</h3>
                        <p>Academic Colleges</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon">
                        <i className="fas fa-graduation-cap"></i>
                      </div>
                      <div className="stat-content">
                        <h3>30+</h3>
                        <p>Degree Programs</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon">
                        <i className="fas fa-award"></i>
                      </div>
                      <div className="stat-content">
                        <h3>14</h3>
                        <p>Accredited Programs</p>
                      </div>
                    </div>
                    <div className="stat-card">
                      <div className="stat-icon">
                        <i className="fas fa-calendar"></i>
                      </div>
                      <div className="stat-content">
                        <h3>20+</h3>
                        <p>Years of Excellence</p>
                      </div>
                    </div>
                  </div>

                <div className="post-footer">
                  <div className="post-tags">
                    <span className="tag-label">Tags:</span>
                    <span className="tag">Campus</span>
                    <span className="tag">Facilities</span>
                    <span className="tag">Gallery</span>
                    <span className="tag">PNC</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
