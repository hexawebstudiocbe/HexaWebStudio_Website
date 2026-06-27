import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Search, ArrowRight } from 'lucide-react';
import Hero from '../sections/Hero';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

export default function HomePage() {
  return (
    <>
      <ScrollToTopOnMount />
      <Hero />
      
      {/* Services Teaser Grid */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="hero-tagline">Our Services</span>
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">
              We focus on building fast, modern websites and deploying search optimization to help your local business stand out.
            </p>
          </div>
          
          <div className="grid-2">
            <div className="service-card reveal reveal-slide-right">
              <div className="service-icon-box">
                <Laptop size={32} />
              </div>
              <h3 className="service-title">Website Development</h3>
              <p className="service-desc">
                High-performance custom websites coded in React JS. Optimized for load speed, responsive screens, and seamless navigation layouts.
              </p>
              <Link to="/services" className="btn btn-outline teaser-btn">
                Explore Dev Services
                <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="service-card reveal reveal-slide-left">
              <div className="service-icon-box">
                <Search size={32} />
              </div>
              <h3 className="service-title">Search Engine Optimization</h3>
              <p className="service-desc">
                Deploying local and on-page SEO techniques to optimize keywords, improve Google search rankings, and attract organic inquiries.
              </p>
              <Link to="/services" className="btn btn-outline teaser-btn">
                Explore SEO Services
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="section section-dark">
        <div className="container">
          <div className="cta-card reveal reveal-scale">
            <h2 className="cta-title">Let's Build <span>Your Business Online</span></h2>
            <p className="cta-subtitle">
              Have a web development project or need an SEO audit? Work with our team of 6 passionate developers to get a customized estimate.
            </p>
            <Link to="/contact" className="btn btn-primary">
              🚀 Request a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
