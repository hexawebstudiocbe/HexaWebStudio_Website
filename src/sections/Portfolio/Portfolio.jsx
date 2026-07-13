import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { projects } from '../../data/projectsData';
import './Portfolio.css';

export default function Portfolio() {
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="section section-alt">
      <div className="container">
        {/* Header */}
        <div className="section-header reveal reveal-slide-up">
          <span className="hero-tagline">Our Work</span>
          <h2 className="section-title">Showcasing Demo Website Mockups</h2>
          <p className="section-subtitle">
            Explore our pre-designed templates tailored for local businesses. We will customize these fully to fit your brand identity or construct a design from scratch.
          </p>
        </div>



        {/* Portfolio Cards Grid */}
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card reveal reveal-slide-up reveal-delay-${(index + 1) * 100}`}
              onClick={() => navigate(`/portfolio/${project.key}`)}
            >
              <div className="project-img-box">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="project-img" 
                />
                <div className="project-overlay">
                  <span className="project-overlay-btn">
                    <Eye size={18} style={{ marginRight: '6px', verticalAlign: 'middle', display: 'inline' }} />
                    View Details
                  </span>
                </div>
              </div>
              <div className="project-content">
                <span className="project-tag">{project.tagLabel}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
