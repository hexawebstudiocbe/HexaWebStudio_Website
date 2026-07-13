import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import FloatingWhatsapp from './components/FloatingWhatsapp/FloatingWhatsapp';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import ContactPage from './pages/ContactPage';
import useScrollReveal from './hooks/useScrollReveal';
import './App.css';

function App() {
  const location = useLocation();
  
  useScrollReveal([location.pathname]);

  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:projectId" element={<ProjectDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingWhatsapp />
    </>
  );
}

export default App;
