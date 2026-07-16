import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import '../styles/navbar.css';
const Navbar = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false); const [isOpen, setIsOpen] = useState(false);
  useEffect(() => { const handleScroll = () => setIsScrolled(window.scrollY > 50); window.addEventListener('scroll', handleScroll); return () => window.removeEventListener('scroll', handleScroll); }, []);
  const nav = (e, id) => { e.preventDefault(); setIsOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };
  const links = [['about','About'], ['skills','Skills'], ['projects','Projects'], ['experience','Experience'], ['certifications','Credentials'], ['contact','Contact']];
  return <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}><div className="navbar-container"><a href="#hero" className="navbar-logo" onClick={e => nav(e, 'hero')}>Sneha Shirke<span>.</span></a><div className={`navbar-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)} /><ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>{links.map(([id, label]) => <li key={id}><a href={`#${id}`} className="navbar-link" onClick={e => nav(e,id)}>{label}</a></li>)}<li><button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle color theme">{theme === 'dark' ? <FaSun /> : <FaMoon />}</button></li><li><a href="#contact" className="navbar-cta" onClick={e => nav(e,'contact')}>Hire Me</a></li></ul><button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu"><span/><span/><span/></button></div></nav>;
}; export default Navbar;
