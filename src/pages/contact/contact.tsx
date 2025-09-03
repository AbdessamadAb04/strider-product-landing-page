import React, { useState } from 'react';
import Navbar from '../../sections/navbar';
import Footer from '../../sections/footer';
import ContactFAQ from '../../sections/faq/contactFaq'; // Contact-specific FAQ component
import './index.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    inquiryType: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const inquiryTypes = [
    { value: '', label: 'Select Inquiry Type' },
    { value: 'product-info', label: 'Product Information' },
    { value: 'technical-support', label: 'Technical Support' },
    { value: 'warranty', label: 'Warranty & Returns' },
    { value: 'partnership', label: 'Business Partnership' },
    { value: 'press-media', label: 'Press & Media' },
    { value: 'feedback', label: 'Feedback & Suggestions' },
    { value: 'other', label: 'Other' }
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ 
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        inquiryType: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="contact-page">
      <Navbar />
      
      {/* Page Header Section */}
      <section className="contact-header">
        <div className="container">
          <h1>Send Us A Message</h1>
          <p className="contact-subtitle">
            Have questions about Strider? Need support or want to learn more? 
            We're here to help and would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-content">
            <div className="form-header">
              <h2>Send Us an Email</h2>
              <p>Fill out the form below and we'll respond to your inquiry via email within 24 hours.</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="form-section">
                <h3 className="form-section-title">Personal Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={errors.firstName ? 'error' : ''}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={errors.lastName ? 'error' : ''}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="your.email@domain.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company/Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company or organization (optional)"
                    />
                  </div>
                </div>
              </div>

              {/* Inquiry Details */}
              <div className="form-section">
                <h3 className="form-section-title">Your Message</h3>
                <div className="form-group">
                  <label htmlFor="inquiryType">Type of Inquiry *</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className={errors.inquiryType ? 'error' : ''}
                  >
                    {inquiryTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                  {errors.inquiryType && <span className="error-message">{errors.inquiryType}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={errors.subject ? 'error' : ''}
                    placeholder="Brief description of your inquiry"
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Please provide detailed information about your inquiry, including any specific questions, technical requirements, or relevant background information..."
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                  <div className="character-count">
                    {formData.message.length}/1000 characters
                  </div>
                </div>
              </div>

              <div className="form-submit">
                {submitStatus === 'success' ? (
                  <div className="success-message">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 11.08V12A10 10 0 1 1 5.93 7.01" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,4 12,14.01 9,11.01" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Message sent successfully! We'll get back to you within 24 hours.</span>
                  </div>
                ) : (
                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Phone Contact Section */}
      <section className="phone-contact-section">
        <div className="container">
          <div className="phone-contact-card">
            <div className="phone-contact-content">
              <div className="phone-contact-info">
                <div className="phone-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19A2 2 0 0 1 20.11 21 19.79 19.79 0 0 1 8.8 9.88A19.79 19.79 0 0 1 2 1.11 2 2 0 0 1 4.08 2H7.16A2 2 0 0 1 9.09 3.54L10.47 7.54A2 2 0 0 1 10 9.7L8.57 11.13A16 16 0 0 0 12.87 15.43L14.3 14A2 2 0 0 1 16.46 13.53L20.46 14.91A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="phone-details">
                  <h3>Prefer Direct Contact?</h3>
                  <p>Call us directly for immediate assistance and real-time support</p>
                  <div className="phone-number">+1 (650) 555-0142</div>
                  <div className="phone-hours">
                    <span className="hours-label">Available:</span>
                    <span>Monday - Friday, 9:00 AM - 6:00 PM PST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Contact-specific FAQ component isolated from main FAQ */}
      <ContactFAQ />

      <Footer />
    </div>
  );
};

export default Contact;
