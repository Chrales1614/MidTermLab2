import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setErrors({});
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Campus Address",
      details: "Katapatan Homes Subdivision, Brgy. Banay-Banay, City of Cabuyao, Laguna, Philippines"
    },
    {
      icon: "fas fa-phone",
      title: "Contact Numbers",
      details: "(049) 531-1279 / (049) 834-2120"
    },
    {
      icon: "fas fa-envelope",
      title: "Email Address",
      details: "info@pnc.edu.ph"
    },
    {
      icon: "fas fa-clock",
      title: "Office Hours",
      details: "Monday - Friday: 8:00 AM - 5:00 PM"
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
                    Contact
                  </span>
                  <span className="post-date">
                    <i className="fas fa-calendar me-1"></i>
                    December 20, 2024
                  </span>
                  <span className="post-read-time">
                    <i className="fas fa-clock me-1"></i>
                    2 min read
                  </span>
                </div>
                <h1 className="post-title">Get in Touch with Pamantasan ng Cabuyao</h1>
                <p className="post-subtitle">Have questions about admissions, programs, or campus life? We're here to help! Connect with us and discover how PnC can help you achieve your educational goals.</p>
              </header>

              {/* Featured Image */}
              <div className="post-featured-image">
                <img src="/images/pnc-main.png" alt="Contact PNC" />
              </div>

              {/* Post Content */}
              <div className="post-content">
                <p className="lead">
                  Whether you're a prospective student, current student, parent, or partner institution, Pamantasan ng Cabuyao welcomes your inquiries. Our dedicated team is ready to assist you with information about our programs, admissions process, scholarships, and campus facilities.
                </p>
                <h2>Send us a Message</h2>
                <p>
                  Fill out the form below and we'll get back to you as soon as possible. 
                  We typically respond within 24 hours during business days.
                </p>

                <div className="contact-form-section">
                  {isSubmitted ? (
                    <div className="alert alert-success text-center">
                      <i className="fas fa-check-circle fa-2x mb-2"></i>
                      <h5>Message Sent Successfully!</h5>
                      <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="contact-form" noValidate>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="name" className="form-label">Full Name *</label>
                          <input
                            type="text"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            disabled={isSubmitting}
                          />
                          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className="form-group">
                          <label htmlFor="email" className="form-label">Email Address *</label>
                          <input
                            type="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email address"
                            disabled={isSubmitting}
                          />
                          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject" className="form-label">Subject *</label>
                        <input
                          type="text"
                          className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Enter message subject"
                          disabled={isSubmitting}
                        />
                        {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="message" className="form-label">Message *</label>
                        <textarea
                          className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                          id="message"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Enter your message here..."
                          disabled={isSubmitting}
                        ></textarea>
                        {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                      </div>
                      <div className="form-submit">
                        <button 
                          type="submit" 
                          className="btn btn-primary btn-lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                              Sending...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-paper-plane me-2"></i>
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                <h2>Contact Information</h2>
                <p>
                  You can also reach us through the following channels. We're available 
                  during office hours and will respond to your inquiries promptly.
                </p>

                <div className="contact-info-grid">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-info-card">
                      <div className="contact-icon">
                        <i className={info.icon}></i>
                      </div>
                      <div className="contact-details">
                        <h4>{info.title}</h4>
                        <p>{info.details}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h2>Connect with Us on Social Media</h2>
                <p>
                  Stay updated with the latest news, events, announcements, and achievements at Pamantasan ng Cabuyao. Follow us on our official social media channels to be part of our growing community.
                </p>

                <div className="social-links-section">
                  <div className="social-icons">
                    <a href="#" className="social-icon facebook">
                      <i className="fab fa-facebook-f"></i>
                      <span>Facebook</span>
                    </a>
                    <a href="#" className="social-icon twitter">
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                    <a href="#" className="social-icon instagram">
                      <i className="fab fa-instagram"></i>
                      <span>Instagram</span>
                    </a>
                    <a href="#" className="social-icon linkedin">
                      <i className="fab fa-linkedin-in"></i>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                <div className="post-footer">
                  <div className="post-tags">
                    <span className="tag-label">Tags:</span>
                    <span className="tag">Contact</span>
                    <span className="tag">Support</span>
                    <span className="tag">PNC</span>
                    <span className="tag">Help</span>
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

export default Contact;
