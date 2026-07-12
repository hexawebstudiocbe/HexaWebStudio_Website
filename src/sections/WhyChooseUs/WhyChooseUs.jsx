import React from 'react';
import { DollarSign, Search, Zap, HeartHandshake } from 'lucide-react';
import './WhyChooseUs.css';

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <DollarSign size={36} />,
      title: "Affordable Quality",
      desc: "Top-tier custom websites tailored to local business budgets. Transparent pricing and customizable quotes with no hidden maintenance fees."
    },
    {
      icon: <Search size={36} />,
      title: "SEO-Optimized Code",
      desc: "We build with search engines in mind. Semantic markup, meta headers, speed optimization, and Schema configurations come standard."
    },
    {
      icon: <Zap size={36} />,
      title: "Ultra Fast Performance",
      desc: "No bulky builders. We write clean code in React + Vite, resulting in high Core Web Vitals scores and immediate load times."
    },
    {
      icon: <HeartHandshake size={36} />,
      title: "Direct Support & Care",
      desc: "Work directly with our team of 6 developers. We provide ongoing support, training, and maintenance to keep your site updated."
    }
  ];

  return (
    <section id="why-choose-us" className="section section-dark">
      <div className="container">
        {/* Header */}
        <div className="section-header dark reveal reveal-slide-up">
          <span className="hero-tagline" style={{ color: 'var(--primary)' }}>Why Choose Hexaweb</span>
          <h2 className="section-title">We Deliver Results, Not Just Code</h2>
          <p className="section-subtitle">
            We are dedicated to building digital channels that actually bring you customers. Here is how we ensure a premium experience for every client.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid-2" style={{ alignItems: 'stretch' }}>
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`wcu-card reveal ${index % 2 === 0 ? 'reveal-slide-right' : 'reveal-slide-left'} reveal-delay-${(index + 1) * 100}`}
            >
              <div className="wcu-icon">
                {card.icon}
              </div>
              <h3 className="wcu-title">{card.title}</h3>
              <p className="wcu-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
