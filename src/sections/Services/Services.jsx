import React from 'react';
import { Laptop, Search, Palette, Check, Code } from 'lucide-react';
import './Services.css';

export default function Services() {
  const serviceList = [
    {
      icon: <Laptop size={32} />,
      title: "Website Development",
      desc: "We construct custom, high-speed websites tailored specifically to represent your brand, drive customer engagement, and boost conversions.",
      features: [
        "Business Websites",
        "Portfolio Websites",
        "Landing Pages",
        "E-commerce Stores"
      ]
    },
    {
      icon: <Search size={32} />,
      title: "Search Engine Optimization",
      desc: "Get found by local and global customers on Google. We deploy clean, modern strategies to rank your website higher and capture search intent.",
      features: [
        "Local SEO Audits",
        "On-Page Content SEO",
        "Technical Speed Optimization",
        "Keyword & Content Strategies"
      ]
    },
    {
      icon: <Code size={32} />,
      title: "Full-Stack Application Development",
      desc: "We build robust, scalable, and secure full-stack web applications tailored to your business needs.",
      features: [
        "Business Applications",
        "Final Year Projects",
        "Admin Dashboards",
        "REST APIs"
      ]
    },
  ];

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal reveal-slide-up">
          <span className="hero-tagline">What We Do</span>
          <h2 className="section-title">Services Built to Help You Scale</h2>
          <p className="section-subtitle">
            We provide end-to-end digital solutions for businesses. From code to content to brand designs, our services are optimized for quality and growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-3">
          {serviceList.map((service, index) => (
            <div 
              key={index} 
              className={`service-card reveal reveal-slide-up reveal-delay-${(index + 1) * 100}`}
            >
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              
              <ul className="service-features-list">
                {service.features.map((feature, i) => (
                  <li key={i} className="service-feature">
                    <Check size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
