import React from 'react';
import Services from '../sections/Services/Services';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount/ScrollToTopOnMount';

export default function ServicesPage() {
  return (
    <>
      <ScrollToTopOnMount />
      <div className="page-header-spacer"></div>
      <Services />
    </>
  );
}
