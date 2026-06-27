import React from 'react';
import Contact from '../sections/Contact';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

export default function ContactPage() {
  return (
    <>
      <ScrollToTopOnMount />
      <div className="page-header-spacer"></div>
      <Contact />
    </>
  );
}
