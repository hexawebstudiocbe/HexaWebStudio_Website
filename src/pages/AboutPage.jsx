import React from 'react';
import About from '../sections/About';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

export default function AboutPage() {
  return (
    <>
      <ScrollToTopOnMount />
      <div className="page-header-spacer"></div>
      <About />
    </>
  );
}
