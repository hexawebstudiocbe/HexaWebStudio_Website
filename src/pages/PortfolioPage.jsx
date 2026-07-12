import React from 'react';
import Portfolio from '../sections/Portfolio/Portfolio';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount/ScrollToTopOnMount';

export default function PortfolioPage() {
  return (
    <>
      <ScrollToTopOnMount />
      <div className="page-header-spacer"></div>
      <Portfolio />
    </>
  );
}
