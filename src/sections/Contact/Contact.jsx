import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, CheckCircle, Send, AlertCircle } from 'lucide-react';
import './Contact.css';

const InstagramIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear validation error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsSubmitting(true);
      setSubmitError(null);
      setIsSuccess(false);

      const workerUrl = import.meta.env.VITE_WORKER_URL || '';

      try {
        const response = await fetch(workerUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setIsSuccess(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            businessName: '',
            message: ''
          });
          setErrors({});
          
          // Clear success notification after 5 seconds
          setTimeout(() => {
            setIsSuccess(false);
          }, 5000);
        } else {
          setSubmitError(result.error || 'Failed to submit form. Please try again.');
        }
      } catch (error) {
        setSubmitError('Unable to connect to the server. Please check your network connection.');
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="section section-alt">
      {/* Dynamic CTA Box immediately preceding/integrated into the header */}
      {/* <div className="container" style={{ marginBottom: '80px' }} id="cta-consultation">
        <div className="cta-section" style={{ borderRadius: 'var(--radius-lg)', padding: '50px 30px' }}>
          <div className="cta-card reveal reveal-scale">
            <h2 className="cta-title">Let's Build <span>Your Business Online</span></h2>
            <p className="cta-subtitle" style={{ margin: 0 }}>
              Get a free consultation and customized quote. Let's design a website that brings real growth to your company.
            </p>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact-form-anchor').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Request a Free Consultation
            </a>
          </div>
        </div>
      </div> */}

      <div className="container" id="contact-form-anchor">
        <div className="section-header reveal reveal-slide-up">
          <span className="hero-tagline">Contact Us</span>
          <h2 className="section-title">Request a Free Quote</h2>
          <p className="section-subtitle">
            Ready to scale your web presence? Fill out the inquiry form below, or reach us instantly via direct channels.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: 'stretch' }}>
          {/* Left panel: Info & links */}
          <div className="contact-info-panel reveal reveal-slide-right">
            <div>
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-desc">
                Fill out the contact form or use our direct quick links below to speak with our developers. We respond within 24 hours.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-detail-row">
                <div className="contact-detail-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-detail-text">
                  <h4>Email</h4>
                  <p>hexawebstudiocbe@gmail.com</p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-detail-text">
                  <h4>Phone</h4>
                  <p>+91 9345541741</p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-detail-text">
                  <h4>Address</h4>
                  <p>Coimbatore, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ color: 'var(--white)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
                Chat Instantly
              </h4>
              <div className="contact-social-grid">
                <a
                  href="https://wa.me/919345541741?text=Hi%20Hexaweb!%20I'd%20like%20to%20get%20a%20free%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-btn"
                  aria-label="WhatsApp"
                >
                  <MessageSquare size={22} />
                </a>
                <a href="https://instagram.com/hexaweb" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Instagram">
                  <InstagramIcon size={22} />
                </a>
                <a href="https://linkedin.com/company/hexaweb" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="LinkedIn">
                  <LinkedinIcon size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div className="contact-form-panel reveal reveal-slide-left reveal-delay-200">
            <h3 className="form-title">Tell Us About Your Project</h3>

            {isSuccess && (
              <div className="form-success-alert">
                <CheckCircle size={22} />
                <span>Thank you! Your quote request has been received. Our team will contact you shortly.</span>
              </div>
            )}

            {submitError && (
              <div className="form-error-alert">
                <AlertCircle size={22} />
                <span>{submitError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="John Doe"
                    required
                  />
                  {errors.name && <span className="form-error-msg">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="john@example.com"
                    required
                  />
                  {errors.email && <span className="form-error-msg">{errors.email}</span>}
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    placeholder="+1 234 567 890"
                    required
                  />
                  {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="businessName" className="form-label">Business Name</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="My Company LLC"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Describe Your Requirements *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className={`form-input ${errors.message ? 'error' : ''}`}
                  placeholder="Tell us what you need (e.g. e-commerce shop, dental clinic website, Local SEO audit)..."
                  required
                  style={{ resize: 'none' }}
                ></textarea>
                {errors.message && <span className="form-error-msg">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', marginTop: 'auto' }} 
                disabled={isSubmitting}
              >
                <Send size={16} />
                {isSubmitting ? 'Sending Request...' : 'Send Request Details'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
