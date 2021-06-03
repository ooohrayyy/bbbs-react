import React from 'react';

import FooterMainContent from './FooterMainContent/FooterMainContent';
import FooterLinks from './FooterLinks/FooterLinks';

export default function Footer() {
  return (
    <footer className="footer">
      <FooterMainContent />
      <FooterLinks />
    </footer>
  );
}
