import React from 'react';
import { Terminal, Code, Cpu, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const handleScrollClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container grid-2">
        {/* Left column: Hero content */}
        <div className="hero-content reveal reveal-slide-right">
          <span className="hero-tagline">Web Design &amp; SEO Agency</span>
          <h1 className="hero-title">
            We Build Websites That <span>Grow Your Business</span>
          </h1>
          <p className="hero-description">
            Modern websites, local &amp; technical SEO, and digital solutions tailored to help businesses of all sizes establish a premium online presence.
          </p>
          <div className="hero-buttons">
            <button 
              onClick={() => handleScrollClick('contact')} 
              className="btn btn-primary"
            >
              🚀 Get a Free Quote
            </button>
            <button 
              onClick={() => handleScrollClick('portfolio')} 
              className="btn btn-secondary"
            >
              💼 View Portfolio
            </button>
          </div>
        </div>

        {/* Right column: Graphic Illustration */}
        <div className="hero-visual reveal reveal-scale reveal-delay-200">
          <div className="hero-blob"></div>
          <div className="hero-mockup-wrapper">
            <div className="hero-mockup-header">
              <div className="mockup-dot"></div>
              <div className="mockup-dot"></div>
              <div className="mockup-dot"></div>
            </div>
            {/* Structured Developer Visual Panel */}
            <div style={{ padding: '24px', fontFamily: 'monospace', fontSize: '0.85rem', color: '#818cf8', lineHeight: '1.7' }}>
              <p style={{ color: '#34d399' }}>// Welcome to Hexaweb Agency</p>
              <p style={{ color: '#f472b6' }}>const <span style={{ color: '#38bdf8' }}>agency</span> = &#123;</p>
              <p style={{ textIndent: '20px' }}>name: <span style={{ color: '#fb923c' }}>"Hexaweb"</span>,</p>
              <p style={{ textIndent: '20px' }}>team: <span style={{ color: '#fb923c' }}>"6 Developers"</span>,</p>
              <p style={{ textIndent: '20px' }}>philosophy: <span style={{ color: '#fb923c' }}>"Quality &amp; Performance"</span>,</p>
              <p style={{ textIndent: '20px' }}>seoFirst: <span style={{ color: '#c084fc' }}>true</span>,</p>
              <p style={{ textIndent: '20px', color: '#e2e8f0' }}>stack: [<span style={{ color: '#fb923c' }}>"React"</span>, <span style={{ color: '#fb923c' }}>"Node.js"</span>, <span style={{ color: '#fb923c' }}>"SEO"</span>]</p>
              <p style={{ color: '#f472b6' }}>&#125;;</p>
              <br />
              <p style={{ color: '#34d399' }}>// Deploying high-performance websites...</p>
              <p style={{ color: '#38bdf8' }}>function <span style={{ color: '#f472b6' }}>optimizeBusiness</span>() &#123;</p>
              <p style={{ textIndent: '20px', color: '#e2e8f0' }}>return buildModernUI()</p>
              <p style={{ textIndent: '40px', color: '#e2e8f0' }}>.applySEO()</p>
              <p style={{ textIndent: '40px', color: '#e2e8f0' }}>.maximizeSpeed();</p>
              <p style={{ color: '#38bdf8' }}>&#125;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
