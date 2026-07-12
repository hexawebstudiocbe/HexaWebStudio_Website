import React from 'react';
import { Users, Shield, Award, Cpu } from 'lucide-react';
import './About.css';

export default function About() {
  const highlights = [
    {
      icon: <Users size={24} />,
      title: "Team of 6 Passionate Developers",
      desc: "We work directly with you to bring your digital vision to life. No outsourcing or middlemen."
    },
    {
      icon: <Cpu size={24} />,
      title: "Modern Technologies",
      desc: "We build using the latest tech stacks (React, Vite, Next.js, .NET) ensuring future-proof web projects."
    },
    {
      icon: <Shield size={24} />,
      title: "Quality & SEO-First Development",
      desc: "Our codebases are optimized for lightning-fast speeds, responsive designs, and core SEO configurations."
    },
    {
      icon: <Award size={24} />,
      title: "Client-Focused Approach",
      desc: "We construct personalized digital strategies that align perfectly with your budget, goals, and brand."
    }
  ];

  return (
    <section id="about" className="section section-light">
      <div className="container grid-2">
        {/* Left: Section narrative */}
        <div className="reveal reveal-slide-right">
          <div className="section-header" style={{ textAlign: 'left', margin: '0 0 32px' }}>
            <span className="hero-tagline" style={{ display: 'block', marginBottom: '8px' }}>Who We Are</span>
            <h2 className="section-title" style={{ textAlign: 'left', display: 'block', margin: '0 0 16px' }}>
              We Are Creators Focused on Your Success
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left' }}>
              We are a tight-knit team of six developers and digital creators. We help businesses establish a robust, premium online presence through high-performance websites and strategic Search Engine Optimization.
            </p>
          </div>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--light-text-main)' }}>Our Mission</h3>
            <p style={{ color: 'var(--light-text-muted)', fontSize: '0.95rem' }}>
              To help local and growing businesses succeed online by building affordable, high-quality, and high-performance digital solutions. We bridge the gap between complex web development and real-world business growth.
            </p>
          </div>
          
          <div className="about-team-grid">
            <div className="team-badge">
              <span className="team-badge-num">6</span>
              <span>Developers</span>
            </div>
            <div className="team-badge">
              <span className="team-badge-num">100%</span>
              <span>Client-Focused</span>
            </div>
            <div className="team-badge">
              <span className="team-badge-num">SEO</span>
              <span>First Design</span>
            </div>
          </div>
        </div>

        {/* Right: Key Highlights */}
        <div className="about-highlights reveal reveal-slide-left reveal-delay-200">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-item">
              <div className="highlight-icon-box">
                {item.icon}
              </div>
              <div className="highlight-text">
                <h3 className="highlight-title">{item.title}</h3>
                <p className="highlight-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
