import React, { useState } from 'react';
import { X, ExternalLink, Calendar, User, Eye, Layers } from 'lucide-react';

// Import local image assets compiled in Phase 2
import gymImg from '../assets/gym.png';
import salonImg from '../assets/salon.png';
import restaurantImg from '../assets/restaurant.png';
import clinicImg from '../assets/clinic.png';
import schoolImg from '../assets/school.png';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      key: 'gym',
      title: 'Pulse Fitness Center',
      tag: 'web-dev',
      tagLabel: 'Web Dev',
      image: gymImg,
      shortDesc: 'A premium dark-themed fitness dashboard with membership signups and workout schedule grids.',
      fullDesc: 'Pulse Fitness Center required a modern, highly energetic web presence to attract new members. We built a fully responsive site featuring animated workout lists, an interactive class schedule tracker, and a user-friendly membership signup portal. Speed index was optimized for high mobile traffic.',
      client: 'Pulse Gym LLC',
      tech: 'React JS, Custom CSS, Lucide Icons',
      timeline: '3 Weeks'
    },
    {
      id: 2,
      key: 'salon',
      title: 'Lumina Hair & Beauty Salon',
      tag: 'branding',
      tagLabel: 'Branding',
      image: salonImg,
      shortDesc: 'An elegant serif-styled landing page with service catalogs and appointment booking integrations.',
      fullDesc: 'Lumina Salon needed a visual-heavy website to exhibit their styling packages and beauty treatments. We built an elegant, minimal landing page featuring rich galleries, hover pricing menus, and integrated booking shortcuts to streamline client reservations.',
      client: 'Lumina Beauty Group',
      tech: 'React JS, Custom Grid CSS, Flexbox layouts',
      timeline: '2 Weeks'
    },
    {
      id: 3,
      key: 'restaurant',
      title: 'The Golden Plate Bistro',
      tag: 'web-dev',
      tagLabel: 'Web Dev',
      image: restaurantImg,
      shortDesc: 'A gourmet restaurant menu interface and online table reservations booking layout.',
      fullDesc: 'An immersive, high-contrast website for a luxury fine-dining restaurant. The platform hosts a digital, categorizable food and beverage menu, a reservation booking form with validation, and custom social link pathways to drive foot traffic.',
      client: 'The Golden Plate Inc.',
      tech: 'React JS, Custom SVG Vectors, Form Validation',
      timeline: '3 Weeks'
    },
    {
      id: 4,
      key: 'clinic',
      title: 'Apex Medical Clinic',
      tag: 'seo',
      tagLabel: 'SEO',
      image: clinicImg,
      shortDesc: 'A clean medical portal layout highlighting doctor bios, healthcare plans, and clinic schedules.',
      fullDesc: 'Apex Medical wanted to improve local search results and patient check-ins. We built a responsive, highly accessible clinic portal optimized for core web vitals and structured Google Schema markup. This drastically increased local search visibility in their target area.',
      client: 'Apex Healthcare Partners',
      tech: 'React JS, Schema SEO Metadata, IntersectionObserver',
      timeline: '4 Weeks'
    },
    {
      id: 5,
      key: 'school',
      title: 'Horizon Academics School',
      tag: 'web-dev',
      tagLabel: 'Web Dev',
      image: schoolImg,
      shortDesc: 'A vibrant educational portal with news reels, academic programs listings, and admission templates.',
      fullDesc: 'A welcoming academic hub for students and parents. We designed a clear grid system highlighting educational tracks, an events calendar, downloadable admission documents, and a student inquiry submission system.',
      client: 'Horizon Education Trust',
      tech: 'React JS, CSS Keyframes, Custom Transitions',
      timeline: '4 Weeks'
    }
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'web-dev', label: 'Web Dev' },
    { value: 'seo', label: 'SEO Optimization' },
    { value: 'branding', label: 'Branding & Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.tag === activeFilter);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    // Disable background scrolling
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    // Re-enable background scrolling
    document.body.style.overflow = 'auto';
  };

  const handleModalCtaClick = () => {
    handleCloseModal();
    const el = document.getElementById('contact');
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

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

        {/* Filters */}
        <div className="portfolio-filters reveal reveal-slide-up reveal-delay-100">
          {filters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card reveal reveal-slide-up reveal-delay-${(index + 1) * 100}`}
              onClick={() => handleOpenModal(project)}
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

      {/* Details View Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn" 
              onClick={handleCloseModal}
              aria-label="Close details dialog"
            >
              <X size={24} />
            </button>
            
            <div className="modal-img-box">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="modal-img" 
              />
            </div>
            
            <div className="modal-body">
              <div className="modal-header-info">
                <div>
                  <span className="modal-tag">{selectedProject.tagLabel}</span>
                  <h3 className="modal-title">{selectedProject.title}</h3>
                </div>
              </div>
              
              <p className="modal-text">{selectedProject.fullDesc}</p>
              
              <div className="modal-details-grid">
                <div className="modal-detail-item">
                  <span className="modal-detail-label">
                    <User size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                    Client
                  </span>
                  <span className="modal-detail-val">{selectedProject.client}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-detail-label">
                    <Layers size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                    Technologies
                  </span>
                  <span className="modal-detail-val">{selectedProject.tech}</span>
                </div>
                <div className="modal-detail-item">
                  <span className="modal-detail-label">
                    <Calendar size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                    Timeline
                  </span>
                  <span className="modal-detail-val">{selectedProject.timeline}</span>
                </div>
              </div>
              
              <button 
                onClick={handleModalCtaClick}
                className="btn btn-primary modal-action-btn"
              >
                🚀 Request a Similar Website
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
