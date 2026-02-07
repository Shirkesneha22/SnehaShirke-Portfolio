import React from 'react';
import { motion } from 'framer-motion';
import useTypingAnimation from '../hooks/useTypingAnimation';
import { 
  FaReact, 
  FaNodeJs, 
  FaMobileAlt, 
  FaDatabase, 
  FaBolt,
  FaJsSquare,
  FaRobot,
  FaPlug
} from 'react-icons/fa';
import '../styles/hero.css';

const Hero = () => {
  const roles = [
    'Full Stack Developer',
    'React.js Developer',
    'Android App Developer (React Native)',
    'UI/UX Focused Developer',
    'Freelance Developer',
    'Product-Focused Engineer',
    'Vibe Coding with AI',
  ];

  const { displayText, isTyping } = useTypingAnimation(roles, {
    typingSpeed: 70,
    deletingSpeed: 40,
    pauseDuration: 1800,
    startDelay: 800,
  });

  const floatingIcons = [
    { icon: <FaReact />, className: 'react', delay: 0 },
    { icon: <FaJsSquare />, className: 'javascript', delay: 0.2 },
    { icon: <FaRobot />, className: 'ai', delay: 0.4 },
    { icon: <FaMobileAlt />, className: 'mobile', delay: 0.6 },
    { icon: <FaDatabase />, className: 'database', delay: 0.3 },
    { icon: <FaPlug />, className: 'api', delay: 0.5 },
    { icon: <FaNodeJs />, className: 'nlp', delay: 0.7 },
    { icon: <FaBolt />, className: 'fast', delay: 0.8 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const floatVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: { delay, duration: 0.5, ease: 'easeOut' },
    }),
    float: (delay) => ({
      y: [-5, 5, -5],
      transition: {
        delay: delay + 1,
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    }),
  };

  const dashboardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.8, duration: 0.6, ease: 'easeOut' },
    },
  };

  const handleCTAClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-greeting" variants={itemVariants}>
            Hello, I'm
          </motion.p>
          <motion.h1 className="hero-name" variants={itemVariants}>
            Sneha Shirke
          </motion.h1>
          
          {/* Typing Animation Role */}
          <motion.div className="hero-typing-container" variants={itemVariants}>
            <span className="hero-typing-text">{displayText}</span>
            <span className={`hero-cursor ${isTyping ? 'typing' : ''}`}>|</span>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            Building production-ready web and mobile applications with React, backend APIs, 
            and AI-driven systems. From resume analyzers to document intelligence platforms — 
            I ship products that solve real problems.
          </motion.p>
          <motion.div className="hero-cta" variants={itemVariants}>
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => handleCTAClick(e, 'projects')}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={(e) => handleCTAClick(e, 'contact')}
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <div className="hero-animation">
          <div className="toolkit-container">
            {/* Floating Icons */}
            {floatingIcons.map((item, index) => (
              <motion.div
                key={index}
                className={`floating-icon ${item.className}`}
                custom={item.delay}
                variants={floatVariants}
                initial="hidden"
                animate={['visible', 'float']}
              >
                {item.icon}
              </motion.div>
            ))}

            {/* Dashboard Frame */}
            <motion.div
              className="dashboard-frame"
              variants={dashboardVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="dashboard-header">
                <span className="dashboard-dot red" />
                <span className="dashboard-dot yellow" />
                <span className="dashboard-dot green" />
              </div>
              <div className="dashboard-content">
                <div className="dashboard-row">
                  <div className="dashboard-block narrow" />
                  <div className="dashboard-block wide accent" />
                </div>
                <div className="dashboard-row">
                  <div className="dashboard-block wide" />
                  <div className="dashboard-block narrow accent" />
                </div>
                <div className="dashboard-row">
                  <div className="dashboard-block narrow accent" />
                  <div className="dashboard-block wide" />
                  <div className="dashboard-block narrow" />
                </div>
              </div>
            </motion.div>

            {/* Overlay Text */}
            <motion.div
              className="hero-overlay-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <p className="overlay-name">Sneha Shirke</p>
              <p className="overlay-role">Full Stack Developer | AI-Powered Products</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
