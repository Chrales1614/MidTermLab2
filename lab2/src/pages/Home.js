import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const blogPosts = [
      {
        id: 1,
        title: "Mission, Vision & Core Values: Building Dangal ng Bayan",
        excerpt: "Discover how Pamantasan ng Cabuyao shapes globally-competitive and value-laden professionals through our commitment to excellence in education, research, and community service.",
        image: "/images/pnc-main.png",
        category: "Institutional",
        date: "December 15, 2024",
        readTime: "5 min read",
        link: "/mission-vision"
      },
      {
        id: 2,
        title: "Campus Facilities: Modern Learning Spaces at PnC",
        excerpt: "Explore our state-of-the-art campus facilities including modern laboratories, comprehensive library, advanced computer centers, and more that support quality education.",
        image: "/images/pnc-library.png",
        category: "Campus",
        date: "December 12, 2024",
        readTime: "3 min read",
        link: "/gallery"
      },
      {
        id: 3,
        title: "Meet Our Development Team",
        excerpt: "Get to know the dedicated IT and Computer Science students from Pamantasan ng Cabuyao who collaborated to create this Single Page Application project.",
        image: "/images/pnc-computer-lab.png",
        category: "Team",
        date: "December 10, 2024",
        readTime: "4 min read",
        link: "/about"
      }
    ];

  const categories = [
    { name: "Institutional", count: 5, color: "primary" },
    { name: "Campus", count: 8, color: "success" },
    { name: "Team", count: 3, color: "danger" },
    { name: "News", count: 12, color: "info" }
  ];

  return (
    <div className="blog-home">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="hero-content">
                  <span className="hero-badge">Welcome to Pamantasan ng Cabuyao</span>
                  <h1 className="hero-title">
                    Premier Institution of Higher Learning in Region IV
                  </h1>
                  <p className="hero-description">
                    Established in 2003, Pamantasan ng Cabuyao (University of Cabuyao) is committed to developing globally-competitive and value-laden professionals who are instrumental to community development and nation-building. Discover our journey of excellence in education, research, and extension services.
                  </p>
                <div className="hero-actions">
                  <Link to="/mission-vision" className="btn btn-primary btn-lg">
                    <i className="fas fa-arrow-right me-2"></i>
                    Explore Our Mission
                  </Link>
                  <Link to="/gallery" className="btn btn-outline-primary btn-lg">
                    <i className="fas fa-images me-2"></i>
                    View Gallery
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-image">
                <div className="hero-image-placeholder">
                  <i className="fas fa-graduation-cap"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row">
          {/* Blog Posts */}
          <div className="col-lg-8">
            <div className="blog-posts-section">
              <div className="section-header">
                <h2 className="section-title">Latest Posts</h2>
                <p className="section-subtitle">Stay updated with the latest from PNC</p>
              </div>
              
              <div className="blog-posts">
                {blogPosts.map((post) => (
                  <article key={post.id} className="blog-post-card">
                    <div className="post-image">
                      <img src={post.image} alt={post.title} />
                      <div className="post-category">
                        <span className={`badge bg-${post.category === 'Institutional' ? 'primary' : post.category === 'Campus' ? 'success' : 'danger'}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span className="post-date">
                          <i className="fas fa-calendar me-1"></i>
                          {post.date}
                        </span>
                        <span className="post-read-time">
                          <i className="fas fa-clock me-1"></i>
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="post-title">
                        <Link to={post.link}>{post.title}</Link>
                      </h3>
                      <p className="post-excerpt">{post.excerpt}</p>
                      <Link to={post.link} className="read-more">
                        Read More <i className="fas fa-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="blog-sidebar">
              {/* Categories Widget */}
              <div className="sidebar-widget">
                <h4 className="widget-title">Categories</h4>
                <div className="categories-list">
                  {categories.map((category, index) => (
                    <Link key={index} to="#" className="category-item">
                      <span className="category-name">{category.name}</span>
                      <span className={`badge bg-${category.color} rounded-pill`}>
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Links Widget */}
              <div className="sidebar-widget">
                <h4 className="widget-title">Quick Links</h4>
                <div className="quick-links">
                  <Link to="/mission-vision" className="quick-link">
                    <i className="fas fa-bullseye me-2"></i>
                    Mission & Vision
                  </Link>
                  <Link to="/gallery" className="quick-link">
                    <i className="fas fa-images me-2"></i>
                    Campus Gallery
                  </Link>
                  <Link to="/about" className="quick-link">
                    <i className="fas fa-users me-2"></i>
                    Our Team
                  </Link>
                  <Link to="/contact" className="quick-link">
                    <i className="fas fa-envelope me-2"></i>
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* About Widget */}
                <div className="sidebar-widget">
                  <h4 className="widget-title">About PnC</h4>
                  <div className="about-widget">
                    <p>
                      Pamantasan ng Cabuyao is a premier institution in Region IV, recognized by CHED with ISO 9001:2015 certification. We produce quality graduates who are "Dangal ng Bayan" - bringing pride and honor to the nation through excellence in education, research, and community service.
                    </p>
                    <Link to="/about" className="btn btn-outline-primary btn-sm">
                      Learn More
                    </Link>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
