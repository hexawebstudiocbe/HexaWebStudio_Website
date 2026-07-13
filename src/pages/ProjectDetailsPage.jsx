import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User, Layers } from 'lucide-react';
import { projects } from '../data/projectsData';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount/ScrollToTopOnMount';
import './ProjectDetailsPage.css';

export default function ProjectDetailsPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.key === projectId);

  useEffect(() => {
    if (!project) {
      navigate('/portfolio', { replace: true });
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <>
      <ScrollToTopOnMount />
      <div className="page-header-spacer"></div>
      
      <section className="section section-alt project-details-section">
        <div className="container">
          
          <Link to="/portfolio" className="back-link">
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>

          <div className="project-details-header reveal reveal-slide-up">
            <span className="project-tag">{project.tagLabel}</span>
            <h1 className="project-title-large">{project.title}</h1>
            <p className="project-desc-large">{project.fullDesc}</p>
          </div>

          <div className="project-info-grid reveal reveal-slide-up reveal-delay-100">
            <div className="info-card">
              <User size={24} className="info-icon" />
              <h4>Project Type</h4>
              <p>{project.client}</p>
            </div>
            <div className="info-card">
              <Layers size={24} className="info-icon" />
              <h4>Technologies</h4>
              <p>{project.tech}</p>
            </div>
            <div className="info-card">
              <Calendar size={24} className="info-icon" />
              <h4>Timeline</h4>
              <p>{project.timeline}</p>
            </div>
          </div>

          <div className="mockups-section">
            <h2 className="mockups-title reveal reveal-slide-up">Responsive Design Preview</h2>
            
            <div className="mockups-composition reveal reveal-slide-up reveal-delay-200">
              {/* Laptop Mockup */}
              <div className="mockup-laptop-wrapper">
                <div className="mockup-laptop">
                  <div className="laptop-screen">
                    <img src={project.image} alt="Laptop view" className="mockup-img laptop-img" />
                  </div>
                  <div className="laptop-base"></div>
                </div>
              </div>
              
              {/* Tablet Mockup */}
              <div className="mockup-tablet-wrapper">
                <div className="mockup-tablet">
                  <div className="tablet-screen">
                    <img src={project.image} alt="Tablet view" className="mockup-img tablet-img" />
                  </div>
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="mockup-mobile-wrapper">
                <div className="mockup-mobile">
                  <div className="mobile-notch"></div>
                  <div className="mobile-screen">
                    <img src={project.image} alt="Mobile view" className="mockup-img mobile-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="project-details-cta reveal reveal-scale">
            <h2>Ready to start a similar project?</h2>
            <Link to="/contact" className="btn btn-primary">
              Request a Free Quote
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
