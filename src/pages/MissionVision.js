import React from 'react';
import { Link } from 'react-router-dom';
import './MissionVision.css';

const MissionVision = () => {
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
                                        Institutional
                                    </span>
                                    <span className="post-date">
                                        <i className="fas fa-calendar me-1"></i>
                                        December 15, 2024
                                    </span>
                                    <span className="post-read-time">
                                        <i className="fas fa-clock me-1"></i>
                                        5 min read
                                    </span>
                                </div>
                                <h1 className="post-title">Pamantasan ng Cabuyao: Mission, Vision & Core Values</h1>
                                <p className="post-subtitle">Our commitment to excellence in education and community development</p>
                            </header>

                            {/* Featured Image */}
                            <div className="post-featured-image">
                                <img src="/images/pnc-campus-overview.jpg" alt="Pamantasan ng Cabuyao Mission and Vision" />
                            </div>

                            {/* Post Content */}
                            <div className="post-content">
                                <p className="lead">
                                    Pamantasan ng Cabuyao (PnC) is committed to providing quality education that develops 
                                    globally-competitive professionals and leaders who contribute to community development 
                                    and nation-building.
                                </p>

                                <h2>Vision</h2>
                                <div className="vision-section">
                                    <div className="vision-icon">
                                        <i className="fas fa-eye"></i>
                                    </div>
                                    <div className="vision-content">
                                        <p>
                                            A premier institution of higher learning in Region IV, developing globally-competitive 
                                            and value-laden professionals and leaders instrumental to community development and nation-building.
                                        </p>
                                    </div>
                                </div>

                                <h2>Mission</h2>
                                <div className="mission-section">
                                    <div className="mission-icon">
                                        <i className="fas fa-bullseye"></i>
                                    </div>
                                    <div className="mission-content">
                                        <p>
                                            As an institution of higher learning, UC (PnC) is committed to equip individuals with 
                                            knowledge, skills, and values that will enable them to achieve their professional goals 
                                            and provide leadership and service for national development.
                                        </p>
                                    </div>
                                </div>

                                <h2>Core Values</h2>
                                <div className="core-values-section">
                                    <p>
                                        As a God-fearing institution respecting multi-faith of people, PnC adheres to the following core values:
                                    </p>
                                    <div className="values-grid">
                                        <div className="value-card">
                                            <div className="value-icon">
                                                <i className="fas fa-user-shield"></i>
                                            </div>
                                            <h4>Personal Dignity</h4>
                                            <p>We respect and uphold the inherent worth and dignity of every individual, fostering an environment of mutual respect and understanding.</p>
                                        </div>
                                        <div className="value-card">
                                            <div className="value-icon">
                                                <i className="fas fa-heart"></i>
                                            </div>
                                            <h4>Nurturing Community</h4>
                                            <p>We build a supportive and inclusive community that encourages growth, collaboration, and positive relationships among all members.</p>
                                        </div>
                                        <div className="value-card">
                                            <div className="value-icon">
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <h4>Commitment to Excellence</h4>
                                            <p>We strive for the highest standards in education, service, and all our endeavors, continuously improving and innovating.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="post-footer">
                                    <div className="post-tags">
                                        <span className="tag-label">Tags:</span>
                                        <span className="tag">Education</span>
                                        <span className="tag">Mission</span>
                                        <span className="tag">Vision</span>
                                        <span className="tag">PnC</span>
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

export default MissionVision;
