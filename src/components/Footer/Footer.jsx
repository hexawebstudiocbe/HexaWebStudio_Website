import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import './Footer.css';

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

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logoImg} alt="Hexaweb Studio Logo" className="footer-logo-img" />
            </Link>
            <p className="footer-desc">
              We are a team of six passionate developers and digital creators. We design and build modern websites, optimize local SEO, and structure professional branding solutions to help your business scale online.
            </p>
            <div className="contact-social-grid">
              <a href="https://wa.me/919345541741" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="WhatsApp">
                <MessageSquare size={20} />
              </a>
              <a href="https://instagram.com/hexaweb" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="https://linkedin.com/company/hexaweb" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="footer-col-title">Services</h3>
            <ul className="footer-links">
              <li><Link to="/services" className="footer-link">Website Development</Link></li>
              <li><Link to="/services" className="footer-link">Search Engine Optimization</Link></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="footer-col-title">Contact Us</h3>
            <div className="footer-contact-info">
              <div className="footer-contact-row">
                <Mail size={18} />
                <span>hexawebstudiocbe@gmail.com</span>
              </div>
              <div className="footer-contact-row">
                <Phone size={18} />
                <span>+91 9345541741</span>
              </div>
              <div className="footer-contact-row">
                <MapPin size={18} />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hexaweb Studio. All rights reserved.</p>
          <p>Built with ❤️ by a Team of 6 Creators</p>
        </div>
      </div>
    </footer>
  );
}
