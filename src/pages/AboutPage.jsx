import React from 'react';
import About from '../sections/About/About';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount/ScrollToTopOnMount';

export default function AboutPage() {
  return (
    <>
      <ScrollToTopOnMount />
      <div className="page-header-spacer"></div>
      <About />
    </>
  );
}
