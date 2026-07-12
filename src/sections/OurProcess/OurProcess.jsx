import React from 'react';

export default function OurProcess() {
  const steps = [
    {
      num: "1",
      title: "Discovery & Strategy",
      desc: "We align on your requirements, target audience, business goals, and budget. Together, we define the roadmap for your project and provide a customized quote."
    },
    {
      num: "2",
      title: "Design & Mockups",
      desc: "Our design team structures the layout, navigation, and user experience. We present initial UI mockups for your feedback and revise them to perfection before coding."
    },
    {
      num: "3",
      title: "High-Performance Development",
      desc: "We write clean, semantic code using React JS. We implement layouts with custom CSS stylesheets, avoiding bloated templates to ensure swift page loading speeds."
    },
    {
      num: "4",
      title: "SEO & Optimization",
      desc: "We integrate keywords, meta tags, schema structures, responsive image assets, and configure your site for Google crawler readiness."
    },
    {
      num: "5",
      title: "Testing, Launch & Handover",
      desc: "After extensive testing across mobile and desktop devices, we deploy the website to premium hosts. We connect your domain, run setup checks, and set it live."
    }
  ];

  return (
    <section id="process" className="section section-light">
      <div className="container">
        {/* Header */}
        <div className="section-header reveal reveal-slide-up">
          <span className="hero-tagline">How We Work</span>
          <h2 className="section-title">Our Step-by-Step Methodology</h2>
          <p className="section-subtitle">
            We follow a structured design and development cycle to ensure your project is completed on time, on budget, and meets top industry standards.
          </p>
        </div>

        {/* Timeline */}
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`process-step reveal ${index % 2 === 0 ? 'reveal-slide-right' : 'reveal-slide-left'} reveal-delay-${(index + 1) * 100}`}
            >
              <div className="process-node">{step.num}</div>
              <div className="process-content-wrapper">
                <div className="process-card">
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
