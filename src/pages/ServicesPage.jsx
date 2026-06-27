import React from 'react';
import Services from '../sections/Services';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

export default function ServicesPage() {
  return (
    <>
      <ScrollToTopOnMount />
      <div className="page-header-spacer"></div>
      <Services />
    </>
  );
}
