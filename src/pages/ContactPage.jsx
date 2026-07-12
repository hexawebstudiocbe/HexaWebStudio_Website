import React from 'react';
import Contact from '../sections/Contact/Contact';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount/ScrollToTopOnMount';

export default function ContactPage() {
  return (
    <>
      <ScrollToTopOnMount />
      <div className="page-header-spacer"></div>
      <Contact />
    </>
  );
}
