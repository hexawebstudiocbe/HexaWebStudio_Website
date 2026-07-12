import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How much does a custom website cost?",
      answer: "Since we do not believe in fixed, one-size-fits-all templates, our quotes are fully customized. We discuss your exact requirements (pages, design density, functionalities) and outline a quotation that matches your budget and timeline."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "A standard landing page or small business website takes about 2 to 3 weeks from discovery to launch. Larger e-commerce shops or complex custom React applications typically require 4 to 8 weeks depending on specifications."
    },
    {
      question: "Do you configure hosting and custom domains?",
      answer: "Yes. We handle the entire deployment process. We configure your custom domain and set up secure, speed-optimized hosting on Netlify, Vercel, or Azure Static Web Apps, ensuring premium performance and zero configuration hassle on your end."
    },
    {
      question: "Will my website look good on mobile screens?",
      answer: "Absolutely. All our websites are custom-coded from the ground up using responsive grids and media layouts. This guarantees that your texts, icons, images, and forms scale and load beautifully on smartphones, tablets, laptops, and wide monitors."
    },
    {
      question: "What is your approach to Search Engine Optimization?",
      answer: "Every website we develop is 'SEO-Ready'. This means we configure structured meta tags, Open Graph properties, robots.txt, sitemap.xml, semantic HTML headers, and optimize page speed (Core Web Vitals) which are critical search ranking factors. We also offer advanced local SEO audits."
    }
  ];

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // close if clicked again
    } else {
      setActiveIndex(index); // open target
    }
  };

  return (
    <section id="faq" className="section section-light">
      <div className="container">
        {/* Header */}
        <div className="section-header reveal reveal-slide-up">
          <span className="hero-tagline">FAQ</span>
          <h2 className="section-title">Common Questions Answered</h2>
          <p className="section-subtitle">
            Have questions about working with Hexaweb? Check our answers below or reach out to us directly for a free consultation.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''} reveal reveal-slide-up reveal-delay-${(index + 1) * 100}`}
            >
              <div 
                className="faq-header" 
                onClick={() => handleToggle(index)}
              >
                <h3 className="faq-question">{faq.question}</h3>
                <span className="faq-icon-box">
                  <ChevronDown size={20} />
                </span>
              </div>
              <div className="faq-body">
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
