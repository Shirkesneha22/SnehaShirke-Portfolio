import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: '💼', label: 'LinkedIn', href: 'https://linkedin.com/in/sneha-shirke' },
    { icon: '🐙', label: 'GitHub', href: 'https://github.com/sneha-shirke' },
    { icon: '✉️', label: 'Email', href: 'mailto:snehashirke221@gmail.com' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#hero" className="footer-logo">
          Sneha Balu Shirke<span>.</span>
        </a>
        <p className="footer-tagline">
          Frontend Developer crafting clean, scalable, and intelligent web experiences.
        </p>
        <div className="footer-social">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <div className="footer-divider" />
        <p className="footer-copyright">
          © {currentYear} Sneha Shirke. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
